"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeNotificationGroup = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeNotificationGroup;
(function (TypeNotificationGroup) {
    TypeNotificationGroup["Automatic"] = "automatic";
    TypeNotificationGroup["Manual"] = "manual";
})(TypeNotificationGroup || (exports.TypeNotificationGroup = TypeNotificationGroup = {}));
(0, graphql_1.registerEnumType)(TypeNotificationGroup, { name: 'TypeNotificationGroup' });
//# sourceMappingURL=type-notification-group.enum.js.map