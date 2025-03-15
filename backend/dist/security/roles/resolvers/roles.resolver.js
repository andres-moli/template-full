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
exports.RolesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roles_service_1 = require("../services/roles.service");
const role_entity_1 = require("../entities/role.entity");
const roles_functionalities_1 = require("../roles.functionalities");
const crud_utils_1 = require("../../auth/utils/crud.utils");
const user_types_decorator_1 = require("../../auth/decorators/user-types.decorator");
const functionality_decorator_1 = require("../../auth/decorators/functionality.decorator");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...roles_service_1.serviceStructure,
    serviceType: roles_service_1.RolesService,
    create: { name: 'createRole', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_functionalities_1.FunctionalityKeys.CREATE)] },
    update: { name: 'updateRole', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_functionalities_1.FunctionalityKeys.UPDATE)] },
    remove: { name: 'removeRole', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_functionalities_1.FunctionalityKeys.REMOVE)] },
    findOne: { name: 'role', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_functionalities_1.FunctionalityKeys.FIND)] },
    findAll: { name: 'roles', decorators: [user_types_decorator_1.AdminOnly, (0, functionality_decorator_1.Functionality)(roles_functionalities_1.FunctionalityKeys.FIND)] }
});
let RolesResolver = class RolesResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
    createDefaultRoles(context) {
        return this.service.createDefaultRoles(context);
    }
};
exports.RolesResolver = RolesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => [role_entity_1.Role], { name: "createDefaultRoles" }),
    (0, user_types_decorator_1.SuperAdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "createDefaultRoles", null);
exports.RolesResolver = RolesResolver = __decorate([
    (0, graphql_1.Resolver)(() => role_entity_1.Role)
], RolesResolver);
//# sourceMappingURL=roles.resolver.js.map