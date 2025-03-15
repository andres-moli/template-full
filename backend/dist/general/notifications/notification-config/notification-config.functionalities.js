"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityKeys = void 0;
const functionality_model_1 = require("../../../security/models/functionality.model");
const key = 'general.notification-config';
const name = 'Notification-config';
exports.FunctionalityKeys = {
    name,
    key,
    description: `${name} Resolver`,
    tags: [functionality_model_1.FunctionalityTag.RESOLVER, functionality_model_1.FunctionalityTag.PARENT],
    CREATE: {
        name: 'CREATE',
        key: `${key}.create`,
        description: `Create new ${name}`,
        tags: [functionality_model_1.FunctionalityTag.METHOD, functionality_model_1.FunctionalityTag.STANDARD],
    },
    FIND: {
        name: 'FIND',
        key: `${key}.find`,
        description: `Find a ${name}/s`,
        tags: [functionality_model_1.FunctionalityTag.METHOD, functionality_model_1.FunctionalityTag.STANDARD],
    },
    UPDATE: {
        name: 'UPDATE',
        key: `${key}.update`,
        description: `Update an ${name}`,
        tags: [functionality_model_1.FunctionalityTag.METHOD, functionality_model_1.FunctionalityTag.STANDARD],
    },
    REMOVE: {
        name: 'REMOVE',
        key: `${key}.remove`,
        description: `Remove an ${name}`,
        tags: [functionality_model_1.FunctionalityTag.METHOD, functionality_model_1.FunctionalityTag.STANDARD],
    },
};
//# sourceMappingURL=notification-config.functionalities.js.map