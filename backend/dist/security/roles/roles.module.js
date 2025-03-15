"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_service_1 = require("./services/roles.service");
const roles_resolver_1 = require("./resolvers/roles.resolver");
const role_entity_1 = require("./entities/role.entity");
const role_fx_entity_1 = require("./entities/role-fx.entity");
const role_fx_resolver_1 = require("./resolvers/role-fx.resolver");
const roles_fx_service_1 = require("./services/roles-fx.service");
const auth_service_1 = require("../auth/auth.service");
const users_module_1 = require("../users/users.module");
const emial_module_1 = require("../../general/email/emial.module");
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({
        providers: [roles_resolver_1.RolesResolver, roles_service_1.RolesService, role_fx_resolver_1.RoleFxResolver, roles_fx_service_1.RolesFxService, auth_service_1.AuthService,],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role, role_fx_entity_1.RoleFx]), users_module_1.UsersModule, emial_module_1.MailModule
        ]
    })
], RolesModule);
//# sourceMappingURL=roles.module.js.map