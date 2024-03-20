"use strict";
// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file aserto/authorizer/v2/api/identity_context.proto (package aserto.authorizer.v2.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityContext = exports.IdentityType = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Identity types, describes the payload type of the identity field inside the IdentityContext message.
 *
 * @generated from enum aserto.authorizer.v2.api.IdentityType
 */
var IdentityType;
(function (IdentityType) {
    /**
     * Unknown, value not set, requests will fail with identity type not set error.
     *
     * @generated from enum value: IDENTITY_TYPE_UNKNOWN = 0;
     */
    IdentityType[IdentityType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * None, no explicit identity context set, equals anonymous.
     *
     * @generated from enum value: IDENTITY_TYPE_NONE = 1;
     */
    IdentityType[IdentityType["NONE"] = 1] = "NONE";
    /**
     * Sub(ject), identity field contains an oAUTH subject.
     *
     * @generated from enum value: IDENTITY_TYPE_SUB = 2;
     */
    IdentityType[IdentityType["SUB"] = 2] = "SUB";
    /**
     * JWT, identity field contains a JWT access token.
     *
     * @generated from enum value: IDENTITY_TYPE_JWT = 3;
     */
    IdentityType[IdentityType["JWT"] = 3] = "JWT";
    /**
     * Manual, propagates thw identity field as-is, without validation, into the input object.
     *
     * @generated from enum value: IDENTITY_TYPE_MANUAL = 4;
     */
    IdentityType[IdentityType["MANUAL"] = 4] = "MANUAL";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
// Retrieve enum metadata with: proto3.getEnumType(IdentityType)
protobuf_1.proto3.util.setEnumType(IdentityType, "aserto.authorizer.v2.api.IdentityType", [
    { no: 0, name: "IDENTITY_TYPE_UNKNOWN" },
    { no: 1, name: "IDENTITY_TYPE_NONE" },
    { no: 2, name: "IDENTITY_TYPE_SUB" },
    { no: 3, name: "IDENTITY_TYPE_JWT" },
    { no: 4, name: "IDENTITY_TYPE_MANUAL" },
]);
/**
 * @generated from message aserto.authorizer.v2.api.IdentityContext
 */
class IdentityContext extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string identity = 1;
         */
        this.identity = "";
        /**
         * @generated from field: aserto.authorizer.v2.api.IdentityType type = 2;
         */
        this.type = IdentityType.UNKNOWN;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IdentityContext().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IdentityContext().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IdentityContext().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IdentityContext, a, b);
    }
}
exports.IdentityContext = IdentityContext;
IdentityContext.runtime = protobuf_1.proto3;
IdentityContext.typeName = "aserto.authorizer.v2.api.IdentityContext";
IdentityContext.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: protobuf_1.proto3.getEnumType(IdentityType) },
]);
