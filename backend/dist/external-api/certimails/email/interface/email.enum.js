"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientType = exports.BodyType = void 0;
const graphql_1 = require("@nestjs/graphql");
var BodyType;
(function (BodyType) {
    BodyType["Custom"] = "CUSTOM";
    BodyType["Code"] = "CODE";
})(BodyType || (exports.BodyType = BodyType = {}));
(0, graphql_1.registerEnumType)(BodyType, { name: 'BodyType' });
var RecipientType;
(function (RecipientType) {
    RecipientType["Destinatary"] = "DESTINATARIO";
    RecipientType["Cc"] = "CC";
    RecipientType["Bcc"] = "BCC";
})(RecipientType || (exports.RecipientType = RecipientType = {}));
(0, graphql_1.registerEnumType)(RecipientType, { name: 'RecipientType' });
//# sourceMappingURL=email.enum.js.map