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
    "coreOAuth2Config": {
        "oidcMayActScript": "c735de08-f8f2-4e69-aa4a-2d8d3d438323",
        "accessTokenMayActScript": "c735de08-f8f2-4e69-aa4a-2d8d3d438323",
        "refreshTokenLifetime": 604800,
        "accessTokenLifetime": 3600,
        "usePolicyEngineForScope": false,
        "codeLifetime": 120,
        "issueRefreshTokenOnRefreshedToken": true,
        "macaroonTokensEnabled": false,
        "issueRefreshToken": true,
        "accessTokenModificationScript": "d22f9a0c-426a-4466-b95e-d0f125b0d5fa",
        "statelessTokensEnabled": false
    },
    "advancedOAuth2Config": {
        "supportedScopes": [],
        "passwordGrantAuthService": "[Empty]",
        "allowedAudienceValues": [],
        "tlsCertificateRevocationCheckingEnabled": false,
        "codeVerifierEnforced": "false",
        "tokenSigningAlgorithm": "HS256",
        "authenticationAttributes": [
            "uid"
        ],
        "defaultScopes": [],
        "tlsClientCertificateHeaderFormat": "URLENCODED_PEM",
        "scopeImplementationClass": "org.forgerock.openam.oauth2.OpenAMScopeValidator",
        "responseTypeClasses": [
            "code|org.forgerock.oauth2.core.AuthorizationCodeResponseTypeHandler",
            "id_token|org.forgerock.openidconnect.IdTokenResponseTypeHandler",
            "device_code|org.forgerock.oauth2.core.TokenResponseTypeHandler",
            "token|org.forgerock.oauth2.core.TokenResponseTypeHandler"
        ],
        "tlsCertificateBoundAccessTokensEnabled": true,
        "hashSalt": "changeme",
        "moduleMessageEnabledInPasswordGrant": false,
        "tokenCompressionEnabled": false,
        "tokenEncryptionEnabled": false,
        "tokenExchangeClasses": [
            "urn:ietf:params:oauth:token-type:access_token=>urn:ietf:params:oauth:token-type:access_token|org.forgerock.oauth2.core.tokenexchange.accesstoken.AccessTokenToAccessTokenExchanger",
            "urn:ietf:params:oauth:token-type:id_token=>urn:ietf:params:oauth:token-type:id_token|org.forgerock.oauth2.core.tokenexchange.idtoken.IdTokenToIdTokenExchanger",
            "urn:ietf:params:oauth:token-type:access_token=>urn:ietf:params:oauth:token-type:id_token|org.forgerock.oauth2.core.tokenexchange.accesstoken.AccessTokenToIdTokenExchanger",
            "urn:ietf:params:oauth:token-type:id_token=>urn:ietf:params:oauth:token-type:access_token|org.forgerock.oauth2.core.tokenexchange.idtoken.IdTokenToAccessTokenExchanger"
        ],
        "grantTypes": [
            "implicit",
            "urn:ietf:params:oauth:grant-type:saml2-bearer",
            "refresh_token",
            "password",
            "client_credentials",
            "urn:ietf:params:oauth:grant-type:device_code",
            "authorization_code",
            "urn:openid:params:grant-type:ciba",
            "urn:ietf:params:oauth:grant-type:uma-ticket",
            "urn:ietf:params:oauth:grant-type:token-exchange",
            "urn:ietf:params:oauth:grant-type:jwt-bearer"
        ],
        "displayNameAttribute": "cn",
        "macaroonTokenFormat": "V2",
        "supportedSubjectTypes": [
            "public",
            "pairwise"
        ],
        "tokenValidatorClasses": [
            "urn:ietf:params:oauth:token-type:id_token|org.forgerock.oauth2.core.tokenexchange.idtoken.OidcIdTokenValidator",
            "urn:ietf:params:oauth:token-type:access_token|org.forgerock.oauth2.core.tokenexchange.accesstoken.OAuth2AccessTokenValidator"
        ]
    },
    "advancedOIDCConfig": {
        "authorisedOpenIdConnectSSOClients": [],
        "storeOpsTokens": true,
        "defaultACR": [],
        "supportedRequestParameterEncryptionEnc": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "claimsParameterSupported": false,
        "amrMappings": {},
        "supportedUserInfoEncryptionEnc": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "authorisedIdmDelegationClients": [],
        "alwaysAddClaimsToToken": false,
        "supportedUserInfoSigningAlgorithms": [
            "ES384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512"
        ],
        "supportedRequestParameterEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "ECDH-ES+A128KW",
            "RSA-OAEP",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ],
        "supportedTokenIntrospectionResponseEncryptionEnc": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "supportedTokenIntrospectionResponseSigningAlgorithms": [
            "PS384",
            "RS384",
            "EdDSA",
            "ES384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "idTokenInfoClientAuthenticationEnabled": true,
        "supportedRequestParameterSigningAlgorithms": [
            "PS384",
            "ES384",
            "RS384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "supportedUserInfoEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "RSA-OAEP",
            "ECDH-ES+A128KW",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ],
        "supportedTokenEndpointAuthenticationSigningAlgorithms": [
            "PS384",
            "ES384",
            "RS384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "supportedTokenIntrospectionResponseEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "RSA-OAEP",
            "ECDH-ES+A128KW",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ],
        "includeAllKtyAlgCombinationsInJwksUri": false,
        "loaMapping": {}
    },
    "coreOIDCConfig": {
        "supportedIDTokenEncryptionMethods": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "jwtTokenLifetime": 3600,
        "supportedClaims": [],
        "oidcDiscoveryEndpointEnabled": false,
        "supportedIDTokenEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "RSA-OAEP",
            "ECDH-ES+A128KW",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ],
        "supportedIDTokenSigningAlgorithms": [
            "PS384",
            "ES384",
            "RS384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "oidcClaimsScript": "36863ffb-40ec-48b9-94b1-9a99f71cc3b5",
        "overrideableOIDCClaims": []
    },
    "clientDynamicRegistrationConfig": {
        "dynamicClientRegistrationSoftwareStatementRequired": false,
        "dynamicClientRegistrationScope": "dynamic_client_registration",
        "requiredSoftwareStatementAttestedAttributes": [
            "redirect_uris"
        ],
        "generateRegistrationAccessTokens": true,
        "allowDynamicRegistration": false
    },
    "cibaConfig": {
        "supportedCibaSigningAlgorithms": [
            "ES256",
            "PS256"
        ],
        "cibaAuthReqIdLifetime": 600,
        "cibaMinimumPollingInterval": 2
    },
    "consent": {
        "clientsCanSkipConsent": true,
        "supportedRcsRequestEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "RSA-OAEP",
            "ECDH-ES+A128KW",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ],
        "supportedRcsResponseEncryptionMethods": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "enableRemoteConsent": false,
        "supportedRcsRequestEncryptionMethods": [
            "A256GCM",
            "A192GCM",
            "A128GCM",
            "A128CBC-HS256",
            "A192CBC-HS384",
            "A256CBC-HS512"
        ],
        "supportedRcsResponseSigningAlgorithms": [
            "PS384",
            "ES384",
            "RS384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "remoteConsentServiceId": "[Empty]",
        "supportedRcsRequestSigningAlgorithms": [
            "PS384",
            "ES384",
            "RS384",
            "HS256",
            "HS512",
            "ES256",
            "RS256",
            "HS384",
            "ES512",
            "PS256",
            "PS512",
            "RS512"
        ],
        "supportedRcsResponseEncryptionAlgorithms": [
            "ECDH-ES+A256KW",
            "ECDH-ES+A192KW",
            "ECDH-ES+A128KW",
            "RSA-OAEP",
            "RSA-OAEP-256",
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "dir",
            "A192KW"
        ]
    },
    "deviceCodeConfig": {
        "devicePollInterval": 5,
        "deviceCodeLifetime": 300
    },
    "_type": {
        "_id": "oauth-oidc",
        "name": "OAuth2 Provider",
        "collection": false
    }
}' \
  $AM_URL/json/realms/root/realm-config/services/oauth-oidc --insecure
  