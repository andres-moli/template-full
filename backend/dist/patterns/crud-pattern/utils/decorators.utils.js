"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyClassDecorators = exports.applyMethodDecorators = void 0;
const common_1 = require("@nestjs/common");
function applyMethodDecorators(decorators) {
    if (!decorators)
        return (0, common_1.applyDecorators)();
    return (0, common_1.applyDecorators)(...(decorators?.map((decorator) => decorator())));
}
exports.applyMethodDecorators = applyMethodDecorators;
function applyClassDecorators(decorators) {
    if (!decorators)
        return (0, common_1.applyDecorators)();
    return (0, common_1.applyDecorators)(...(decorators?.map((decorator) => decorator())));
}
exports.applyClassDecorators = applyClassDecorators;
//# sourceMappingURL=decorators.utils.js.map