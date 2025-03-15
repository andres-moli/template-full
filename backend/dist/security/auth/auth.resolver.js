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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const auth_response_type_1 = require("./types/auth-response.type");
const auth_guard_1 = require("./guards/auth.guard");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const singin_admin_input_1 = require("./dto/singin-admin.input");
const user_admin_decorator_1 = require("../decorators/user-admin.decorator");
const validate_token_input_1 = require("./dto/validate-token.input");
const approval_token_input_1 = require("./dto/approval-token.input");
const send_double_verification_input_1 = require("./dto/send-double-verification.input");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async signUpWithDocument(signupInput) {
        return this.authService.signUpWithDocument({ user: undefined }, signupInput);
    }
    async signUpWithEmail(signupInput) {
        return this.authService.signUpWithEmail({ user: undefined }, signupInput);
    }
    async signIn(signinInput) {
        return this.authService.signin({ user: undefined }, signinInput);
    }
    async signInAdmin(signInAdminInput, context) {
        return this.authService.signInUserAdmin(context.req.user, signInAdminInput);
    }
    revalidate(user) {
        return this.authService.revalidateToken(user);
    }
    sendEmailRecovryPassword(email) {
        return this.authService.sendEmailRecovryPassword(email);
    }
    resetPassword(user, password) {
        return this.authService.restPassword(user, password);
    }
    validateUserToken(validateTokenInput) {
        return this.authService.validateUserToken(validateTokenInput);
    }
    approvalJwt(approvalTokenInput) {
        return this.authService.approvalJwt(approvalTokenInput);
    }
    async sendsendCodeDoubleVerification(sendDoubleVerificationInput) {
        return this.authService.sendCodeDoubleVerification(sendDoubleVerificationInput);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => auth_response_type_1.AuthResponse, { name: 'signUpWithDocument' }),
    __param(0, (0, graphql_1.Args)('signupInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signUpWithDocument", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_response_type_1.AuthResponse, { name: 'signUpWithEmail' }),
    __param(0, (0, graphql_1.Args)('signupInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignupEmailInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signUpWithEmail", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_response_type_1.AuthResponse, { name: 'signin' }),
    __param(0, (0, graphql_1.Args)('signinInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignInInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signIn", null);
__decorate([
    (0, user_admin_decorator_1.UserAdmin)(),
    (0, graphql_1.Mutation)(() => auth_response_type_1.AuthResponse, { name: 'signInAdmin' }),
    __param(0, (0, graphql_1.Args)('signInAdminInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [singin_admin_input_1.SigninAdminInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signInAdmin", null);
__decorate([
    (0, graphql_1.Query)(() => auth_response_type_1.AuthResponse, { name: 'revalidate' }),
    (0, common_1.UseGuards)(auth_guard_1.SecurityAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", auth_response_type_1.AuthResponse)
], AuthResolver.prototype, "revalidate", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "sendEmailRecovryPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    (0, common_1.UseGuards)(auth_guard_1.SecurityAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "resetPassword", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'validateUserToken' }),
    __param(0, (0, graphql_1.Args)('validateTokenInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_token_input_1.ValidateTokenInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "validateUserToken", null);
__decorate([
    (0, graphql_1.Query)(() => auth_response_type_1.AuthResponse, { name: 'approvalJwt' }),
    __param(0, (0, graphql_1.Args)('approvalTokenInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approval_token_input_1.ApprovalTokenInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "approvalJwt", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'sendCodeDoubleVerification' }),
    __param(0, (0, graphql_1.Args)('sendDoubleVerificationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_double_verification_input_1.SendDoubleVerificationInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "sendsendCodeDoubleVerification", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => auth_response_type_1.AuthResponse),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map