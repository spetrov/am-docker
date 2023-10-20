#!/usr/bin/env bash
# ****** THIS IS A COPY OF THE DS Entrypoint ****
# This can be used for experimenting with alternate DS bootstrapping strategies
#
# The contents of this file are subject to the terms of the Common Development and
# Distribution License (the License). You may not use this file except in compliance with the
# License.
#
# You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
# specific language governing permission and limitations under the License.
#
# When distributing Covered Software, include this CDDL Header Notice in each file and include
# the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
# Header, with the fields enclosed by brackets [] replaced by your own identifying
# information: "Portions Copyright [year] [name of copyright owner]".
#
# Copyright 2019-2020 ForgeRock AS.
#
set -eu

#set -x
# ParallelGC with a single generation tenuring threshold has been shown to give the best
# performance vs determinism trade-off for servers using JVM heaps of less than 8GB,
# as well as all batch tool use-cases such as import-ldif.
# Unusual deployments, such as those requiring very large JVM heaps, should tune this setting
# and use a different garbage collector, such as G1.
# The /dev/urandom device is up to 4 times faster for crypto operations in some VM environments
# where the Linux kernel runs low on entropy. This settting does not negatively impact random number security
# and is recommended as the default.
DEFAULT_OPENDJ_JAVA_ARGS="-XX:MaxRAMPercentage=75 -XX:+UseParallelGC -XX:MaxTenuringThreshold=1 -Djava.security.egd=file:/dev/urandom"
export OPENDJ_JAVA_ARGS=${OPENDJ_JAVA_ARGS:-${DEFAULT_OPENDJ_JAVA_ARGS}}

export DS_GROUP_ID=${DS_GROUP_ID:-default}
export DS_SERVER_ID=${DS_SERVER_ID:-${HOSTNAME:-localhost}}
export DS_ADVERTISED_LISTEN_ADDRESS=${DS_ADVERTISED_LISTEN_ADDRESS:-$(hostname -f)}

# If the advertised listen address looks like a Kubernetes pod host name of the form
# <statefulset-name>-<ordinal>.<domain-name> then derived the default bootstrap servers names as
# <statefulset-name>-0.<domain-name>,<statefulset-name>-1.<domain-name>.
#
# Sample hostnames from Kubernetes include:
#
#     ds-1.userstore.svc.cluster.local
#     ds-userstore-1.userstore.svc.cluster.local
#     userstore-1.userstore.jnkns-pndj-bld-pr-4958-1.svc.cluster.local
#     ds-userstore-1.userstore.jnkns-pndj-bld-pr-4958-1.svc.cluster.local
#
if [[ "${DS_ADVERTISED_LISTEN_ADDRESS}" =~ [^.]+-[0-9]+\..+ ]]; then
    podDomain=${DS_ADVERTISED_LISTEN_ADDRESS#*.}
    podName=${DS_ADVERTISED_LISTEN_ADDRESS%%.*}
    podPrefix=${podName%-*}

    ds0=${podPrefix}-0.${podDomain}:8989
    ds1=${podPrefix}-1.${podDomain}:8989
    export DS_BOOTSTRAP_REPLICATION_SERVERS=${DS_BOOTSTRAP_REPLICATION_SERVERS:-${ds0},${ds1}}
else
    export DS_BOOTSTRAP_REPLICATION_SERVERS=${DS_BOOTSTRAP_REPLICATION_SERVERS:-${DS_ADVERTISED_LISTEN_ADDRESS}:8989}
fi

# Set to true in order to set the admin and monitor passwords before starting the server.
export DS_SET_UID_ADMIN_AND_MONITOR_PASSWORDS=${DS_SET_UID_ADMIN_AND_MONITOR_PASSWORDS:-false}
# By default the admin and monitor passwords are provided as plain-text.
# Set this to true if the passwords have been pre-encoded externally.
export DS_USE_PRE_ENCODED_PASSWORDS=${DS_USE_PRE_ENCODED_PASSWORDS:-false}
# This variable should contain the plain-text password or pre-encoded password for the uid=admin account.
# If it is not set then fetch the password from a file instead.
export DS_UID_ADMIN_PASSWORD=${DS_UID_ADMIN_PASSWORD:-}
export DS_UID_ADMIN_PASSWORD_FILE=${DS_UID_ADMIN_PASSWORD_FILE:-secrets/admin.pwd}
# This variable should contain the plain-text password or pre-encoded password for the uid=monitor account.
# If it is not set then fetch the password from a file instead.
export DS_UID_MONITOR_PASSWORD=${DS_UID_MONITOR_PASSWORD:-}
export DS_UID_MONITOR_PASSWORD_FILE=${DS_UID_MONITOR_PASSWORD_FILE:-secrets/monitor.pwd}

# List of directories which are expected to be found in the data directory.
dataDirs="db import-tmp locks var"

# Build an array containing the list of pluggable backend base DNs by redirecting the command output to
# mapfile using process substitution.
mapfile -t BASE_DNS < <(./bin/ldifsearch -b cn=backends,cn=config -s one config/config.ldif "(&(objectclass=ds-cfg-pluggable-backend)(ds-cfg-enabled=true))" ds-cfg-base-dn | grep "^ds-cfg-base-dn" | cut -c17-)

validateImage() {
    # FIXME: fail-fast if database encryption has been used when the image was built (OPENDJ-6598).
    diff -q template/db/adminRoot/admin-backend.ldif db/adminRoot/admin-backend.ldif > /dev/null || {
        echo "The server cannot start because it appears that database encryption"
        echo "was enabled for a backend when the Docker image was built."
        echo "This feature is not yet supported when using Docker."
        exit 1
    }
}

# Initialize persisted data in the "data" directory if it is empty, using data from the data directories
# contained in the Docker image. The data directory contains the server's persisted state, including db directories,
# changelog, and locks. In dev environments it is expected to be an empty tmpfs volume whose content is lost after
# restart.
bootstrapDataFromImageIfNeeded() {
    for d in ${dataDirs}; do
        if [[ -z "$(ls -A "data/$d" 2>/dev/null)" ]]; then
            echo "Initializing \"data/$d\" from Docker image"
            mkdir -p data
            mv "$d" data
        fi
    done
}

linkKeyStoreAndDataDirectories() {
    # Ensure that the keystore from the Docker build is no longer being used.
    rm config/keystore config/keystore.pin
    ln -s ../secrets/keystore ../secrets/keystore.pin config
    ls -l secrets

    for d in ${dataDirs}; do
        rm -rf "$d"
        mkdir -p "data/$d"
        ln -s "data/$d" .
    done
}

# If the pod was terminated abnormally then lock file may not have been cleaned up.
removeLocks() {
    rm -f /opt/opendj/locks/server.lock
}

# Make it easier to run tools interactively by exec'ing into the running container.
setOnlineToolProperties() {
    mkdir -p ~/.opendj
    cp config/tools.properties ~/.opendj
}

upgradeDataAndRebuildDegradedIndexes() {
    # Upgrade is idempotent, so it should have no effect if there is nothing to do.
    # Fail-fast if the config needs upgrading because it should have been done when the image was built.
    echo "Upgrading configuration and data..."
     ./upgrade --dataOnly --acceptLicense --force --ignoreErrors --no-prompt

    # Rebuild any corrupt/missing indexes.
    for baseDn in "${BASE_DNS[@]}"; do
        echo "Rebuilding degraded indexes for base DN \"${baseDn}\"..."
        rebuild-index --offline --noPropertiesFile --rebuildDegraded --baseDn "${baseDn}" > /dev/null
    done
}

setUserPasswordInLdifFile() {
    file=$1
    dn=$2
    pwd=$3

    echo "Updating the \"${dn}\" password"

    if [[ "${DS_USE_PRE_ENCODED_PASSWORDS}" == "true" ]]; then
        enc_pwd="${pwd}"
    else
        # Set the JVM args to avoid blowing up the container memory.
        enc_pwd=$(OPENDJ_JAVA_ARGS="-Xmx256m -Djava.security.egd=file:/dev/./urandom" encode-password -s "PBKDF2-HMAC-SHA256" -c "${pwd}")
    fi

    ldifmodify "${file}" > "${file}.tmp" << EOF
dn: ${dn}
changetype: modify
replace: userPassword
userPassword: ${enc_pwd}
EOF
    rm "${file}"
    mv "${file}.tmp" "${file}"
}

setAdminAndMonitorPasswordsIfNeeded() {
    if [[ "${DS_SET_UID_ADMIN_AND_MONITOR_PASSWORDS}" == "true" ]]; then
        setUserPasswordInLdifFile db/rootUser/rootUser.ldif       "uid=admin"   "${DS_UID_ADMIN_PASSWORD:-$(cat "${DS_UID_ADMIN_PASSWORD_FILE}")}"
        setUserPasswordInLdifFile db/monitorUser/monitorUser.ldif "uid=monitor" "${DS_UID_MONITOR_PASSWORD:-$(cat "${DS_UID_MONITOR_PASSWORD_FILE}")}"
    fi
}

preExec() {
    echo
    echo "Server configured with:"
    echo "    Group ID                        : $DS_GROUP_ID"
    echo "    Server ID                       : $DS_SERVER_ID"
    echo "    Advertised listen address       : $DS_ADVERTISED_LISTEN_ADDRESS"
    echo "    Bootstrap replication server(s) : $DS_BOOTSTRAP_REPLICATION_SERVERS"
    echo
}

waitUntilSigTerm() {
    trap 'echo "Caught SIGTERM"' SIGTERM
    while :
    do
       sleep infinity &
       wait $!
    done
}

CMD="${1:-help}"
case "$CMD" in
help)
    cat docker-entrypoint-help.md
    ;;

start-ds)
    validateImage
    bootstrapDataFromImageIfNeeded
    linkKeyStoreAndDataDirectories
    removeLocks
    setOnlineToolProperties
    upgradeDataAndRebuildDegradedIndexes
    setAdminAndMonitorPasswordsIfNeeded
    preExec
    exec start-ds --nodetach
    ;;

initialize-only)
    validateImage
    bootstrapDataFromImageIfNeeded
    linkKeyStoreAndDataDirectories
    removeLocks
    upgradeDataAndRebuildDegradedIndexes
    setAdminAndMonitorPasswordsIfNeeded
    echo "Initialization completed"
    ;;

dev)
    # Sleep until Kubernetes terminates the pod using a SIGTERM.
    echo "Connect using 'kubectl exec -it POD -- /bin/bash'"
    waitUntilSigTerm
    ;;

*)
    validateImage
    linkKeyStoreAndDataDirectories
    removeLocks
    preExec
    exec "$@"
    ;;

esac
