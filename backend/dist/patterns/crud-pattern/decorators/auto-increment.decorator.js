"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutoIncrementKey = exports.AutoIncrement = void 0;
const common_1 = require("@nestjs/common");
const AUTO_INCREMENT_KEY = "AutoIncrementKey";
const AutoIncrement = (key) => (0, common_1.SetMetadata)(AUTO_INCREMENT_KEY, key);
exports.AutoIncrement = AutoIncrement;
function getAutoIncrementKey(entityType) {
    return Reflect.getMetadata(AUTO_INCREMENT_KEY, entityType);
}
exports.getAutoIncrementKey = getAutoIncrementKey;
//# sourceMappingURL=auto-increment.decorator.js.map