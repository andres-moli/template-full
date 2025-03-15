"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeNotification = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeNotification;
(function (TypeNotification) {
    TypeNotification["Email"] = "email";
    TypeNotification["Sms"] = "sms";
    TypeNotification["Wss"] = "wss";
    TypeNotification["Push"] = "push";
})(TypeNotification || (exports.TypeNotification = TypeNotification = {}));
(0, graphql_1.registerEnumType)(TypeNotification, { name: 'TypeNotification' });
//# sourceMappingURL=type-notificartion.enum.js.map