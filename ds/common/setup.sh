#!/usr/bin/env bash
./setup \
          --deploymentKeyPassword password \
          --rootUserDn uid=admin \
          --rootUserPassword password \
          --hostname opendj.example.com \
          --adminConnectorPort 4444 \
          --ldapPort 1389 --httpPort 8080 \
          --replicationPort 8989 \
          --profile am-config:7.0.0 \
          --profile am-cts:7.0.0 \
          --profile am-identity-store:7.0.0 \
          --set am-config/amConfigAdminPassword:password \
          --set am-cts/amCtsAdminPassword:password \
          --set am-cts/tokenExpirationPolicy:am \
          --set am-identity-store/amIdentityStoreAdminPassword:password \
          --acceptLicense


./bin/ldapmodify \
          -h opendj.example.com \
          -p 1389 \
          -D "uid=admin" \
          -w password \
          -f external-am-datastore.ldif
