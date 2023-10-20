# Build the Docker image using the command "docker build -t forgerock/am-base ."
FROM tomcat:9-jdk11-adoptopenjdk-hotspot AS base

#RUN echo 'deb http://old-releases.ubuntu.com/ubuntu/ vivid-updates multiverse' >> /etc/apt/sources.list
RUN apt-get update -y && \
    apt-get install -y jq binutils wget unzip

# This installs the GCP stack driver profiler.
RUN mkdir -p /opt/cprof && \
     wget -q -O- https://storage.googleapis.com/cloud-profiler/java/latest/profiler_java_agent.tar.gz \
     | tar xzv -C /opt/cprof

# Installs the async-profiler
RUN mkdir -p /opt/async-profiler && \
    wget -q -O-  https://github.com/jvm-profiling-tools/async-profiler/releases/download/v1.5/async-profiler-1.5-linux-x64.tar.gz \
    | tar xzv -C /opt/async-profiler

ADD openam.war "$CATALINA_HOME"/webapps/
RUN unzip -q "$CATALINA_HOME"/webapps/openam.war -d "$CATALINA_HOME"/webapps/am && \
    rm "$CATALINA_HOME"/webapps/openam.war

FROM tomcat:9-jdk11-adoptopenjdk-hotspot AS am-tomcat

# RUN apt-get update -y && \
#     apt-get install -y jq xxd uuid-runtime

ENV FORGEROCK_HOME=/home/forgerock

# The openam context directory
ENV AM_HOME=$FORGEROCK_HOME/openam

ENV CATALINA_OPTS="-server \
    -Dcom.sun.services.debug.mergeall=on \
    -Dcom.sun.identity.configuration.directory=$AM_HOME \
    -Dcom.iplanet.services.stats.state=off \
    -Dcom.sun.identity.sm.sms_object_filebased_enabled=true \
    -Dcom.sun.identity.sm.filebased_embedded_enabled=true \
    -Dorg.forgerock.donotupgrade=true \
    -DtomcatAccessLogDir=/proc/self/fd -DtomcatAccessLogFile=1"

#  -Dcom.sun.identity.sm.sms_object_filebased_enabled=true -Dcom.sun.identity.sm.filebased_embedded_enabled=true" && clean-deploy-ldaps

ENV AM_CONTAINER_JVM_ARGS="-XX:MaxRAMPercentage=75 \
    -XX:InitialRAMPercentage=75 \
    -XX:MaxTenuringThreshold=1 \
    -Djava.security.egd=file:/dev/urandom"

RUN groupadd -g 11111 forgerock && \
    useradd -c "ForgeRock user" -m -d $FORGEROCK_HOME -u 11111 -g 11111 -G root forgerock

RUN apt-get update -y && \
    apt-get install -y curl jq xxd uuid-runtime && \
    apt-get clean

RUN chown -R forgerock:root "$CATALINA_HOME"

USER 11111

RUN mkdir -p $AM_HOME/config
RUN chmod -R g+wx $AM_HOME

RUN rm -rf "$CATALINA_HOME"/webapps/*

COPY --from=base --chown=forgerock:root /opt/cprof /opt/cprof
COPY --from=base --chown=forgerock:root /opt/async-profiler /opt/async-profiler
COPY --from=base --chown=forgerock:root "$CATALINA_HOME"/webapps/am "$CATALINA_HOME"/webapps/am

COPY --chown=forgerock:root tomcat/Certs/*.* "$CATALINA_HOME"/conf/Certs/
COPY --chown=forgerock:root tomcat/*.xml "$CATALINA_HOME"/conf/
COPY --chown=forgerock:root scripts/*.* "$FORGEROCK_HOME"/
COPY --chown=forgerock:root docker-entrypoint.sh "$FORGEROCK_HOME"/

EXPOSE 8080
EXPOSE 443

CMD ["/home/forgerock/start.sh"]
