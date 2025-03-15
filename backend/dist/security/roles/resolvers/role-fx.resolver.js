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
exports.RoleFxResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roles_fx_service_1 = require("../services/roles-fx.service");
const role_fx_entity_1 = require("../entities/role-fx.entity");
const roles_fx_functionalities_1 = require("../roles-fx.functionalities");
const create_and_remove_role_fx_input_1 = require("../dto/create-and-remove-role-fx.input");
const crud_utils_1 = require("../../auth/utils/crud.utils");
const user_types_decorator_1 = require("../../auth/decorators/user-types.decorator");
const functionality_decorator_1 = require("../../auth/decorators/functionality.decorator");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...roles_fx_service_1.serviceStructure,
    serviceType: roles_fx_service_1.RolesFxService,
    findOne: { name: 'roleFx', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_fx_functionalities_1.FunctionalityKeys.FIND)] },
    findAll: { name: 'rolesFx', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_fx_functionalities_1.FunctionalityKeys.FIND)] }
});
let RoleFxResolver = class RoleFxResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
    createRoleFx(context, createRoleFxInput) {
        return this.service.createRoleFx(context, createRoleFxInput);
    }
    removeRoleFx(context, removeRoleFxInput) {
        return this.service.removeRoleFx(context, removeRoleFxInput);
    }
    replaceAllRolesFx(context, replaceAllRoleFxInput) {
        return this.service.replaceAllRolesFx(context, replaceAllRoleFxInput);
    }
};
exports.RoleFxResolver = RoleFxResolver;
__decorate([
    (0, functionality_decorator_1.FunctionalityResolver)(roles_fx_functionalities_1.FunctionalityKeys.CREATE),
    (0, graphql_1.Mutation)(() => [role_fx_entity_1.RoleFx], { name: "createRoleFx" }),
    (0, user_types_decorator_1.AdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('createRoleFxInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_and_remove_role_fx_input_1.CreateAndRemoveRoleFxInput]),
    __metadata("design:returntype", Promise)
], RoleFxResolver.prototype, "createRoleFx", null);
__decorate([
    (0, functionality_decorator_1.FunctionalityResolver)(roles_fx_functionalities_1.FunctionalityKeys.REMOVE),
    (0, graphql_1.Mutation)(() => [String], { name: "removeRoleFx" }),
    (0, user_types_decorator_1.AdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('removeRoleFxInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_and_remove_role_fx_input_1.CreateAndRemoveRoleFxInput]),
    __metadata("design:returntype", Promise)
], RoleFxResolver.prototype, "removeRoleFx", null);
__decorate([
    (0, functionality_decorator_1.FunctionalityResolver)(roles_fx_functionalities_1.FunctionalityKeys.CREATE),
    (0, graphql_1.Mutation)(() => [role_fx_entity_1.RoleFx], { name: "replaceAllRolesFx" }),
    (0, user_types_decorator_1.AdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('replaceAllRoleFxInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_and_remove_role_fx_input_1.CreateAndRemoveRoleFxInput]),
    __metadata("design:returntype", Promise)
], RoleFxResolver.prototype, "replaceAllRolesFx", null);
exports.RoleFxResolver = RoleFxResolver = __decorate([
    (0, graphql_1.Resolver)(() => role_fx_entity_1.RoleFx)
], RoleFxResolver);
//# sourceMappingURL=role-fx.resolver.js.map