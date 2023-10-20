FROM gcr.io/forgerock-io/ds:7.1.0
USER root
RUN chown -R forgerock:root /opt/opendj
USER forgerock
COPY --chown=forgerock:root common  /opt/opendj/
ARG profile_version
RUN bin/relax-security-settings.sh