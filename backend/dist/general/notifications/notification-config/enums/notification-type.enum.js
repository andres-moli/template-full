"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["Token"] = "token";
})(NotificationTypes || (exports.NotificationTypes = NotificationTypes = {}));
(0, graphql_1.registerEnumType)(NotificationTypes, { name: 'NotificationType' });
//# sourceMappingURL=notification-type.enum.js.map