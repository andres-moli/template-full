"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusInterceptor = void 0;
const status_type_enum_1 = require("../users/enums/status-type.enum");
const common_1 = require("@nestjs/common");
const context_utils_1 = require("../../patterns/crud-pattern/utils/context.utils");
let UserStatusInterceptor = class UserStatusInterceptor {
    intercept(context, next) {
        let status;
        try {
            const req = context_utils_1.ContextUtils.getRequest(context);
            if (!req || !req.user)
                throw new common_1.BadRequestException('Invalid user object in the request.');
            status = req.user.status;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Something went wrong, please contact your system administrator.');
        }
        if (status === status_type_enum_1.UserStatusTypes.PartlyActive)
            throw new common_1.ForbiddenException('The user does not have a complete record.');
        return next.handle();
    }
};
exports.UserStatusInterceptor = UserStatusInterceptor;
exports.UserStatusInterceptor = UserStatusInterceptor = __decorate([
    (0, common_1.Injectable)()
], UserStatusInterceptor);
//# sourceMappingURL=user-status.interceptor.js.map