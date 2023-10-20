#!/bin/bash

#
# Copyright 2021 ForgeRock AS. All Rights Reserved
#

AM_URL=$1
USERNAME=$2
PASSWORD=$3

# Get a session token
TOKEN=$(curl -X POST \
  -H 'accept-api-version: resource=2.0,protocol=1.0' \
  -H 'accept: application/json' \
  -H 'x-openam-username: '"$USERNAME"'' \
  -H 'x-openam-password: '"$PASSWORD"'' \
  -H 'x-requested-with: curl' \
  $AM_URL/json/realms/root/authenticate --insecure | jq -r '.tokenId')

echo Got token $TOKEN

# Set CORS
curl -X PUT \
  -H 'iPlanetDirectoryPro: '"$TOKEN"'' \
  -H 'content-type: application/json' \
  -H 'x-requested-with: curl' \
  -d '{
    "acceptedOrigins": [
        "https://sdkapp.example.com:8443"
    ],
    "acceptedMethods": [
        "GET",
        "POST"
    ],
    "allowCredentials": true,
    "maxAge": 0,
    "enabled": true,
    "acceptedHeaders": [
        "Content-Type",
        "X-Requested-With",
        "Accept-API-Version",
        "If-Match",
        "Authorization"
    ],
    "exposedHeaders": [],
    "_type": {
        "_id": "configuration",
        "name": "Cors Configuration",
        "collection": true
    }
}' \
  $AM_URL/json/global-config/services/CorsService/configuration/js-sdk-example --insecure