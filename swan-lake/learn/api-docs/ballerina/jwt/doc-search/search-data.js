var searchData = {
  "modules": [
    {
      "id": "jwt",
      "description": "\u003cp\u003eThis module provides an inbound and outbound JWT authentication provider, which can be used to authenticate using a JWT and the functionality related to issuing and validating JWT.\u003c/p\u003e",
      "orgName": "ballerina",
      "version": "1.0.6"
    }
  ],
  "classes": [
    {
      "id": "OutboundJwtAuthProvider",
      "description": "\u003cp\u003eRepresents the outbound JWT auth provider, which is used to authenticate with an external endpoint by generating a JWT.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "InboundJwtAuthProvider",
      "description": "\u003cp\u003eRepresents the inbound JWT auth provider, which authenticates by validating a JWT.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "functions": [
    {
      "id": "validateJwt",
      "description": "\u003cp\u003eValidates the given JWT string.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "decodeJwt",
      "description": "\u003cp\u003eDecodes the given JWT string.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "issueJwt",
      "description": "\u003cp\u003eIssues a JWT based on the provided header and payload.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "buildHeaderString",
      "description": "\u003cp\u003eBuilds the header string from the \u003ccode\u003ejwt:JwtHeader\u003c/code\u003e record.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "buildPayloadString",
      "description": "\u003cp\u003eBuilds the payload string from the \u003ccode\u003ejwt:JwtPayload\u003c/code\u003e record.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "records": [
    {
      "id": "JwtHeader",
      "description": "\u003cp\u003eRepresents JWT header.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwtPayload",
      "description": "\u003cp\u003eRepresents JWT payload.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwtValidatorConfig",
      "description": "\u003cp\u003eRepresents JWT validator configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwksConfig",
      "description": "\u003cp\u003eRepresents the JWKs endpoint configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "ClientConfiguration",
      "description": "\u003cp\u003eRepresents the configurations of the client used to call the JWKs endpoint.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "SecureSocket",
      "description": "\u003cp\u003eRepresents the SSL/TLS configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwtTrustStoreConfig",
      "description": "\u003cp\u003eRepresents JWT trust store configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwtIssuerConfig",
      "description": "\u003cp\u003eRepresents JWT validator configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "JwtKeyStoreConfig",
      "description": "\u003cp\u003eRepresents JWT key store configurations.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "constants": [
    {
      "id": "RS256",
      "description": "\u003cp\u003eThe \u003ccode\u003eRSA-SHA256\u003c/code\u003e algorithm\u003c/p\u003e\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "RS384",
      "description": "\u003cp\u003eThe \u003ccode\u003eRSA-SHA384\u003c/code\u003e algorithm\u003c/p\u003e\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "RS512",
      "description": "\u003cp\u003eThe \u003ccode\u003eRSA-SHA512\u003c/code\u003e algorithm\u003c/p\u003e\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "NONE",
      "description": "\u003cp\u003eUnsecured JWTs (no signing)\u003c/p\u003e\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "errors": [
    {
      "id": "JwtError",
      "description": "\u003cp\u003eRepresents the JWT distinct error\u003c/p\u003e\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "types": [
    {
      "id": "JwtSigningAlgorithm",
      "description": "\u003cp\u003eThe key algorithms supported by crypto module.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    },
    {
      "id": "Error",
      "description": "\u003cp\u003eRepresents the JWT error type with details.\u003c/p\u003e",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.6"
    }
  ],
  "clients": [],
  "listeners": [],
  "annotations": [],
  "abstractObjects": []
};