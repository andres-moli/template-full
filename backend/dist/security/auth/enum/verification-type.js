"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var VerificationTypes;
(function (VerificationTypes) {
    VerificationTypes["Email"] = "emailVerification";
    VerificationTypes["Phone"] = "phoneVerification";
})(VerificationTypes || (exports.VerificationTypes = VerificationTypes = {}));
(0, graphql_1.registerEnumType)(VerificationTypes, { name: 'VerificationTypes' });
//# sourceMappingURL=verification-type.js.map