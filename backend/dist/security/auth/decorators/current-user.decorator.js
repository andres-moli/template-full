"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const user_type_enum_1 = require("../../users/enums/user-type.enum");
const context_utils_1 = require("../../../patterns/crud-pattern/utils/context.utils");
exports.CurrentUser = (0, common_1.createParamDecorator)((validTypes = [], context) => {
    const request = context_utils_1.ContextUtils.getRequest(context);
    const { user, isPublic: isPublic } = request;
    if (!isPublic) {
        if (!user)
            throw new common_1.InternalServerErrorException(`current user is undefined, check if CurrentPageVersionGuard is set to this controller`);
        if (validTypes.length !== 0 &&
            user.type != user_type_enum_1.UserTypes.SuperAdmin &&
            !validTypes.includes(user.type))
            throw new common_1.ForbiddenException(`User '${user.name}' with type: [${user.type}], is not allowed to perform this action`);
    }
    return user;
});
//# sourceMappingURL=current-user.decorator.js.map