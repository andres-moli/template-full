"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextUtils = void 0;
const graphql_1 = require("@nestjs/graphql");
class ContextUtils {
    static getRequest(context) {
        let request;
        if (context?.contextType === 'graphql')
            request = graphql_1.GqlExecutionContext.create(context).getContext().req;
        else
            request = context.switchToHttp().getRequest();
        return request;
    }
}
exports.ContextUtils = ContextUtils;
//# sourceMappingURL=context.utils.js.map