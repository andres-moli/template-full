"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserDocumentTypes;
(function (UserDocumentTypes) {
    UserDocumentTypes["CitizenshipCard"] = "c.c";
    UserDocumentTypes["IdentityCard"] = "t.i";
    UserDocumentTypes["ForeignerIdentityCard"] = "c.e";
    UserDocumentTypes["Nit"] = "nit";
    UserDocumentTypes["DiplomaticCard"] = "c.d";
    UserDocumentTypes["Passport"] = "p.a";
    UserDocumentTypes["SpecialPermissionToStay"] = "p.e.p";
    UserDocumentTypes["TemporaryProtectionPermit"] = "p.p.t";
    UserDocumentTypes["SafeConduct"] = "s.c";
})(UserDocumentTypes || (exports.UserDocumentTypes = UserDocumentTypes = {}));
(0, graphql_1.registerEnumType)(UserDocumentTypes, { name: 'UserDocumentTypes' });
//# sourceMappingURL=document-type.enum.js.map