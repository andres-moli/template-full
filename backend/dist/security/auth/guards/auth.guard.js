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
exports.SecurityAuthGuard = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const public_decorator_1 = require("../decorators/public.decorator");
const context_utils_1 = require("../../../patterns/crud-pattern/utils/context.utils");
let SecurityAuthGuard = class SecurityAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    getRequest(context) {
        return context_utils_1.ContextUtils.getRequest(context);
    }
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info, context, status) {
        const isPublic = this.reflector.get(public_decorator_1.IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            context_utils_1.ContextUtils.getRequest(context).isPublic = true;
            return undefined;
        }
        context.user = user;
        return super.handleRequest(err, user, info, context, status);
    }
};
exports.SecurityAuthGuard = SecurityAuthGuard;
exports.SecurityAuthGuard = SecurityAuthGuard = __decorate([
    __param(0, (0, common_1.Inject)(core_1.Reflector)),
    __metadata("design:paramtypes", [core_1.Reflector])
], SecurityAuthGuard);
//# sourceMappingURL=auth.guard.js.map