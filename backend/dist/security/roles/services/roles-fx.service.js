"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesFxService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const role_fx_entity_1 = require("../entities/role-fx.entity");
const create_and_remove_role_fx_input_1 = require("../dto/create-and-remove-role-fx.input");
const update_role_fx_input_1 = require("../dto/update-role-fx.input");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: role_fx_entity_1.RoleFx,
    createInputType: create_and_remove_role_fx_input_1.CreateAndRemoveRoleFxInput,
    updateInputType: update_role_fx_input_1.UpdateRoleFxInput,
});
let RolesFxService = class RolesFxService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    async createNewRolesFx(permissions, repository, role) {
        const newRolesFx = [];
        for (let i = 0; i < permissions.length; i++) {
            const permission = permissions[i];
            const validateRoleFx = await repository
                .createQueryBuilder('roleFx')
                .where('roleFx.permission = :permission', { permission })
                .andWhere('roleFx.role = :roleId', { roleId: role })
                .getOne();
            if (!validateRoleFx) {
                const newRoleFx = repository.create({ permission, role });
                await repository.save(newRoleFx);
                newRolesFx.push(newRoleFx);
            }
        }
        return newRolesFx;
    }
    async createRoleFx(context, createRoleFxInput) {
        const repository = this.getRepository(context);
        const { permissions, role } = createRoleFxInput;
        const newRolesFx = await this.createNewRolesFx(permissions, repository, role);
        return newRolesFx;
    }
    async removeRoleFx(context, createRoleFxInput) {
        const repository = this.getRepository(context);
        const { permissions, role } = createRoleFxInput;
        const eliminatedRolesFx = [];
        for (let i = 0; i < permissions.length; i++) {
            const permission = permissions[i];
            const validateRoleFx = await repository
                .createQueryBuilder('roleFx')
                .where('roleFx.permission = :permission', { permission })
                .andWhere('roleFx.role = :roleId', { roleId: role })
                .getOne();
            if (validateRoleFx) {
                await repository.remove(validateRoleFx);
                eliminatedRolesFx.push(permission);
            }
        }
        return eliminatedRolesFx;
    }
    async replaceAllRolesFx(context, replaceAllFxInput) {
        const repository = this.getRepository(context);
        const { permissions, role } = replaceAllFxInput;
        const rolesFx = await repository.createQueryBuilder('roleFx')
            .where('roleFx.role = :roleId', { roleId: role })
            .getMany();
        await repository.remove(rolesFx);
        const newRolesFx = await this.createNewRolesFx(permissions, repository, role);
        return newRolesFx;
    }
};
exports.RolesFxService = RolesFxService;
exports.RolesFxService = RolesFxService = __decorate([
    (0, common_1.Injectable)()
], RolesFxService);
//# sourceMappingURL=roles-fx.service.js.map