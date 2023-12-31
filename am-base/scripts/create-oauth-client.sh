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

# Create OAuth client (WebOauthClient)
curl -X PUT \
  -H 'iPlanetDirectoryPro: '"$TOKEN"'' \
  -H 'content-type: application/json' \
  -H 'x-requested-with: curl' \
  -d '{
    "coreOAuth2ClientConfig": {
        "loopbackInterfaceRedirection": {
            "inherited": false,
            "value": false
        },
        "defaultScopes": {
            "inherited": false,
            "value": []
        },
        "refreshTokenLifetime": {
            "inherited": false,
            "value": 0
        },
        "scopes": {
            "inherited": false,
            "value": [
                "openid",
                "profile",
                "me.read"
            ]
        },
        "status": {
            "inherited": false,
            "value": "Active"
        },
        "accessTokenLifetime": {
            "inherited": false,
            "value": 0
        },
        "redirectionUris": {
            "inherited": false,
            "value": [
                "https://sdkapp.example.com:8443/_callback/"
            ]
        },
        "clientName": {
            "inherited": false,
            "value": []
        },
        "clientType": {
            "inherited": false,
            "value": "Public"
        },
        "authorizationCodeLifetime": {
            "inherited": false,
            "value": 0
        }
    },
    "advancedOAuth2ClientConfig": {
        "descriptions": {
            "inherited": false,
            "value": []
        },
        "requestUris": {
            "inherited": false,
            "value": []
        },
        "logoUri": {
            "inherited": false,
            "value": []
        },
        "subjectType": {
            "inherited": false,
            "value": "public"
        },
        "clientUri": {
            "inherited": false,
            "value": []
        },
        "name": {
            "inherited": false,
            "value": []
        },
        "contacts": {
            "inherited": false,
            "value": []
        },
        "responseTypes": {
            "inherited": false,
            "value": [
                "code",
                "token",
                "id_token",
                "code token",
                "token id_token",
                "code id_token",
                "code token id_token",
                "device_code",
                "device_code id_token"
            ]
        },
        "updateAccessToken": {
            "inherited": false
        },
        "mixUpMitigation": {
            "inherited": false,
            "value": false
        },
        "javascriptOrigins": {
            "inherited": false,
            "value": []
        },
        "policyUri": {
            "inherited": false,
            "value": []
        },
        "sectorIdentifierUri": {
            "inherited": false
        },
        "tokenEndpointAuthMethod": {
            "inherited": false,
            "value": "none"
        },
        "isConsentImplied": {
            "inherited": false,
            "value": true
        },
        "grantTypes": {
            "inherited": false,
            "value": [
                "authorization_code"
            ]
        }
    },
    "signEncOAuth2ClientConfig": {
        "tokenEndpointAuthSigningAlgorithm": {
            "inherited": false,
            "value": "RS256"
        },
        "idTokenEncryptionEnabled": {
            "inherited": false,
            "value": false
        },
        "tokenIntrospectionEncryptedResponseEncryptionAlgorithm": {
            "inherited": false,
            "value": "A128CBC-HS256"
        },
        "requestParameterSignedAlg": {
            "inherited": false
        },
        "clientJwtPublicKey": {
            "inherited": false
        },
        "idTokenPublicEncryptionKey": {
            "inherited": false
        },
        "mTLSSubjectDN": {
            "inherited": false
        },
        "userinfoResponseFormat": {
            "inherited": false,
            "value": "JSON"
        },
        "mTLSCertificateBoundAccessTokens": {
            "inherited": false,
            "value": false
        },
        "publicKeyLocation": {
            "inherited": false,
            "value": "jwks_uri"
        },
        "tokenIntrospectionResponseFormat": {
            "inherited": false,
            "value": "JSON"
        },
        "jwkStoreCacheMissCacheTime": {
            "inherited": false,
            "value": 60000
        },
        "requestParameterEncryptedEncryptionAlgorithm": {
            "inherited": false,
            "value": "A128CBC-HS256"
        },
        "userinfoSignedResponseAlg": {
            "inherited": false
        },
        "idTokenEncryptionAlgorithm": {
            "inherited": false,
            "value": "RSA-OAEP-256"
        },
        "requestParameterEncryptedAlg": {
            "inherited": false
        },
        "mTLSTrustedCert": {
            "inherited": false
        },
        "jwkSet": {
            "inherited": false
        },
        "idTokenEncryptionMethod": {
            "inherited": false,
            "value": "A128CBC-HS256"
        },
        "jwksCacheTimeout": {
            "inherited": false,
            "value": 3600000
        },
        "userinfoEncryptedResponseAlg": {
            "inherited": false
        },
        "idTokenSignedResponseAlg": {
            "inherited": false,
            "value": "RS256"
        },
        "jwksUri": {
            "inherited": false
        },
        "tokenIntrospectionSignedResponseAlg": {
            "inherited": false,
            "value": "RS256"
        },
        "userinfoEncryptedResponseEncryptionAlgorithm": {
            "inherited": false,
            "value": "A128CBC-HS256"
        },
        "tokenIntrospectionEncryptedResponseAlg": {
            "inherited": false,
            "value": "RSA-OAEP-256"
        }
    },
    "coreOpenIDClientConfig": {
        "claims": {
            "inherited": false,
            "value": [
                "openid",
                "profile",
                "me.read"
            ]
        },
        "clientSessionUri": {
            "inherited": false
        },
        "defaultAcrValues": {
            "inherited": false,
            "value": []
        },
        "jwtTokenLifetime": {
            "inherited": false,
            "value": 0
        },
        "defaultMaxAgeEnabled": {
            "inherited": false,
            "value": false
        },
        "defaultMaxAge": {
            "inherited": false,
            "value": 600
        },
        "postLogoutRedirectUri": {
            "inherited": false,
            "value": []
        }
    },
    "coreUmaClientConfig": {
        "claimsRedirectionUris": {
            "inherited": false,
            "value": []
        }
    },
    "_type": {
        "_id": "OAuth2Client",
        "name": "OAuth2 Clients",
        "collection": true
    }
}' \
  $AM_URL/json/realms/root/realm-config/agents/OAuth2Client/WebOauthClient --insecure