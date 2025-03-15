"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_service_1 = require("../auth.service");
const functionality_decorator_1 = require("../decorators/functionality.decorator");
const user_type_enum_1 = require("../../users/enums/user-type.enum");
let FunctionalityGuard = class FunctionalityGuard {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    async canActivate(context) {
        const functionalities = this.reflector.get(functionality_decorator_1.FUNCTIONALITY_KEY, context.getHandler());
        const user = context.user;
        if (!user)
            throw new common_1.ForbiddenException('You are not allowed to perform this action');
        if (functionalities && user.type !== user_type_enum_1.UserTypes.SuperAdmin) {
            const { id } = user;
            const result = await this.authService.validateFunctionality(context, functionalities.key, id);
            if (!result)
                throw new common_1.ForbiddenException('You are not allowed to perform this action');
        }
        return true;
    }
};
exports.FunctionalityGuard = FunctionalityGuard;
exports.FunctionalityGuard = FunctionalityGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [core_1.Reflector,
        auth_service_1.AuthService])
], FunctionalityGuard);
//# sourceMappingURL=functionality.guard.js.map