#!/bin/bash

#
# Copyright 2021 ForgeRock AS. All Rights Reserved
#

until [ "`curl --silent --show-error --connect-timeout 1 -I http://localhost:8080/am/config/options.htm | grep '200'`" != "" ];
do
  echo --- sleeping for 10 seconds
  sleep 10
done

echo "Tomcat is ready!"

export ADMINPWD=password
export DEMOPWD=password
export SERVER=http://openam.example.com:8080
export COOKIE_DOMAIN=openam.example.com
export BASE_DIR=$HOME/am


curl --verbose "$SERVER/am/config/configurator" \
--header "Content-Type:application/x-www-form-urlencoded" \
--data-urlencode "SERVER_URL=$SERVER" \
--data-urlencode "DEPLOYMENT_URI=am" \
--data-urlencode "BASE_DIR=$BASE_DIR" \
--data-urlencode "locale=en_US" \
--data-urlencode "PLATFORM_LOCALE=en_US" \
--data-urlencode "ADMIN_PWD=$ADMINPWD" \
--data-urlencode "ADMIN_CONFIRM_PWD=$ADMINPWD" \
--data-urlencode "AMLDAPUSERPASSWD=$DEMOPWD" \
--data-urlencode "AMLDAPUSERPASSWD_CONFIRM=$DEMOPWD" \
--data-urlencode "COOKIE_DOMAIN=$COOKIE_DOMAIN" \
--data-urlencode "DATA_STORE=embedded" \
--data-urlencode "DIRECTORY_SSL=SSL" \
--data-urlencode "DIRECTORY_SERVER=localhost" \
--data-urlencode "DIRECTORY_PORT=50636" \
--data-urlencode "DIRECTORY_ADMIN_PORT=4444" \
--data-urlencode "DIRECTORY_JMX_PORT=1689" \
--data-urlencode "ROOT_SUFFIX=dc=example,dc=com" \
--data-urlencode "DS_DIRMGRDN=uid=admin" \
--data-urlencode "DS_DIRMGRPASSWD=password" \
--data-urlencode "acceptLicense=false"

# Sleep for 5 seconds...
sleep 5

curl --silent --show-error --connect-timeout 1 -I http://localhost:8080/am/config/START-IMPORT
# Import a bunch of trees
$FORGEROCK_HOME/amtree.sh -h https://openam.example.com/am -u amadmin -p 'password' -I -f $FORGEROCK_HOME/sdks-trees.json
$FORGEROCK_HOME/publish-oauth2-service.sh https://openam.example.com/am amadmin password
$FORGEROCK_HOME/create-oauth-client.sh https://openam.example.com/am amadmin password
$FORGEROCK_HOME/set-cors.sh https://openam.example.com/am amadmin password
