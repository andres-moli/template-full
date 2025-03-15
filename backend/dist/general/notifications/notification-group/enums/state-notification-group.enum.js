"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateNotificationGroup = void 0;
const graphql_1 = require("@nestjs/graphql");
var StateNotificationGroup;
(function (StateNotificationGroup) {
    StateNotificationGroup["Draft"] = "draft";
    StateNotificationGroup["Process"] = "process";
    StateNotificationGroup["PartialComplete"] = "partialComplete";
    StateNotificationGroup["Complete"] = "complete";
    StateNotificationGroup["Error"] = "error";
})(StateNotificationGroup || (exports.StateNotificationGroup = StateNotificationGroup = {}));
(0, graphql_1.registerEnumType)(StateNotificationGroup, { name: 'StateNotificationGroup' });
//# sourceMappingURL=state-notification-group.enum.js.map