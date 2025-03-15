"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityKeys = void 0;
const security_functionalities_1 = require("./security/security.functionalities");
const general_functionalities_1 = require("./general/general.functionalities");
exports.FunctionalityKeys = {
    name: 'app',
    key: 'app',
    description: 'app',
    children: [
        ...security_functionalities_1.FunctionalityKeys,
        ...general_functionalities_1.FunctionalityKeys
    ],
};
//# sourceMappingURL=app.functionalities.js.map