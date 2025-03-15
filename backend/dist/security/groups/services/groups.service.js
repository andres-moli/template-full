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
exports.GroupsService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_groups_input_1 = require("../dto/inputs/create-groups.input");
const update_groups_input_1 = require("../dto/inputs/update-groups.input");
const groups_entity_1 = require("../entities/groups.entity");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("../constants/events.constants");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const notification_config_service_1 = require("../../../general/notifications/notification-config/services/notification-config.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: groups_entity_1.Group,
    createInputType: create_groups_input_1.CreateGroupInput,
    updateInputType: update_groups_input_1.UpdateGroupInput,
});
let GroupsService = class GroupsService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(notificationConfigService) {
        super();
        this.notificationConfigService = notificationConfigService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        if (createInput.notificationConfigId)
            entity.notificationConfig = await this.notificationConfigService.findOne(context, createInput.notificationConfigId, true);
    }
    async beforeUpdate(context, repository, entity, updateInput) {
        if (updateInput.notificationConfigId)
            entity.notificationConfig = await this.notificationConfigService.findOne(context, updateInput.notificationConfigId, true);
    }
    async findOneById({ context, input }) {
        try {
            return await this.findOne(context, input, true);
        }
        catch (error) {
            return error;
        }
    }
    async findByNotification({ context, input }) {
        try {
            const repository = this.getRepository(context);
            const result = await repository.findBy({ notificationConfig: { id: input } });
            if (!result || result.length === 0)
                throw new common_1.NotFoundException(`groups with notification config id ${input} not found`);
            return result;
        }
        catch (error) {
            return error;
        }
    }
};
exports.GroupsService = GroupsService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.findGroupById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupsService.prototype, "findOneById", null);
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.findGroupByNotification),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupsService.prototype, "findByNotification", null);
exports.GroupsService = GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_config_service_1.NotificationConfigService])
], GroupsService);
//# sourceMappingURL=groups.service.js.map