"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentContext = void 0;
const common_1 = require("@nestjs/common");
const context_utils_1 = require("../utils/context.utils");
exports.CurrentContext = (0, common_1.createParamDecorator)((data, context) => {
    const request = context_utils_1.ContextUtils.getRequest(context);
    const user = request.user;
    const transactionManager = request.transactionManager;
    const currentContext = { user, transactionManager };
    return currentContext;
});
//# sourceMappingURL=current-context.decorator.js.map