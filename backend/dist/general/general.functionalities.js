"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityKeys = void 0;
const functionality_model_1 = require("../security/models/functionality.model");
const notification_group_functionalities_1 = require("./notifications/notification-group/notification-group.functionalities");
const notification_functionalities_1 = require("./notifications/notification/notification.functionalities");
const notification_config_functionalities_1 = require("./notifications/notification-config/notification-config.functionalities");
exports.FunctionalityKeys = [
    {
        name: 'general',
        key: 'general',
        description: 'General Module',
        tags: [functionality_model_1.FunctionalityTag.MODULE, functionality_model_1.FunctionalityTag.PARENT],
        children: [
            new functionality_model_1.FunctionalityModel(notification_functionalities_1.FunctionalityKeys),
            new functionality_model_1.FunctionalityModel(notification_config_functionalities_1.FunctionalityKeys),
            new functionality_model_1.FunctionalityModel(notification_group_functionalities_1.FunctionalityKeys)
        ],
    },
];
//# sourceMappingURL=general.functionalities.js.map