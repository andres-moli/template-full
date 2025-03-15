"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityKeys = void 0;
const functionality_model_1 = require("./models/functionality.model");
const users_functionalities_1 = require("./users/users.functionalities");
const roles_functionalities_1 = require("./roles/roles.functionalities");
const roles_fx_functionalities_1 = require("./roles/roles-fx.functionalities");
exports.FunctionalityKeys = [
    {
        name: 'security',
        key: 'security',
        description: 'Security Module',
        tags: [functionality_model_1.FunctionalityTag.MODULE, functionality_model_1.FunctionalityTag.PARENT],
        children: [
            new functionality_model_1.FunctionalityModel(users_functionalities_1.FunctionalityKeys),
            new functionality_model_1.FunctionalityModel(roles_functionalities_1.FunctionalityKeys),
            new functionality_model_1.FunctionalityModel(roles_fx_functionalities_1.FunctionalityKeys),
        ],
    },
];
//# sourceMappingURL=security.functionalities.js.map