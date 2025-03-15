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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_role_input_1 = require("../dto/create-role.input");
const update_role_input_1 = require("../dto/update-role.input");
const role_entity_1 = require("../entities/role.entity");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_contants_1 = require("../constants/events.contants");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const user_type_enum_1 = require("../../users/enums/user-type.enum");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: role_entity_1.Role,
    createInputType: create_role_input_1.CreateRoleInput,
    updateInputType: update_role_input_1.UpdateRoleInput,
});
let RolesService = class RolesService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    async findOneById(context, id, orFail) {
        const repository = this.getRepository(context);
        const role = await repository.findOneBy({ id });
        if (orFail && !role)
            throw new common_1.NotFoundException(`Role with id: ${id} not found`);
        return role;
    }
    async createDefaultRoles(context) {
        const roles = [
            {
                name: "User Default",
                description: "User Default",
                defaultForType: user_type_enum_1.UserTypes.User,
                roleFx: [
                    { permission: "security.users.find" },
                    { permission: "security.users.update" },
                ],
            },
            {
                name: "Admin Default",
                description: "Admin Default",
                defaultForType: user_type_enum_1.UserTypes.Admin,
                roleFx: [
                    { permission: "security.users.create" },
                    { permission: "security.users.add" },
                    { permission: "security.users.find" },
                    { permission: "security.users.update" },
                    { permission: "security.users.remove" }
                ],
            }
        ];
        const repository = this.getRepository(context);
        for (let i = 0; i < roles.length; i++) {
            const { name } = roles[i];
            const role = await repository.findOne({
                where: {
                    name
                }
            });
            if (role)
                throw new common_1.BadRequestException(`The role with the name: ${name} already exists in the database`);
        }
        const newRoles = repository.create(roles);
        await repository.save(newRoles);
        return newRoles;
    }
    async onValidateRole({ context, roleId, orFail }) {
        const role = await this.findOneById(context, roleId, orFail);
        return role;
    }
};
exports.RolesService = RolesService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_contants_1.validateRoleEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesService.prototype, "onValidateRole", null);
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)()
], RolesService);
//# sourceMappingURL=roles.service.js.map