"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateNotification = void 0;
const graphql_1 = require("@nestjs/graphql");
var StateNotification;
(function (StateNotification) {
    StateNotification["Draft"] = "draft";
    StateNotification["Complete"] = "complete";
    StateNotification["Error"] = "error";
})(StateNotification || (exports.StateNotification = StateNotification = {}));
(0, graphql_1.registerEnumType)(StateNotification, { name: 'StateNotification' });
//# sourceMappingURL=state-notification.enum.js.map