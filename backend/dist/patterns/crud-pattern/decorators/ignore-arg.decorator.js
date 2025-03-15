"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgnoreArg = void 0;
const common_1 = require("@nestjs/common");
exports.IgnoreArg = (0, common_1.createParamDecorator)((data, context) => {
    return undefined;
});
//# sourceMappingURL=ignore-arg.decorator.js.map