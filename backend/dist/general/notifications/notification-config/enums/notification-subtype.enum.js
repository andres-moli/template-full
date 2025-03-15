"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSubtypes = void 0;
const notification_type_enum_1 = require("./notification-type.enum");
exports.NotificationSubtypes = {
    [notification_type_enum_1.NotificationTypes.Token]: [{ name: "signUp" }, { name: "recoverPassword" }, { name: "validateJwt" }]
};
//# sourceMappingURL=notification-subtype.enum.js.map