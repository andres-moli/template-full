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
exports.NotificationGroupService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const create_notification_group_input_1 = require("../dto/inputs/create-notification-group.input");
const update_notification_group_input_1 = require("../dto/inputs/update-notification-group.input");
const notification_group_entity_1 = require("../entities/notification-group.entity");
const notification_config_service_1 = require("../../notification-config/services/notification-config.service");
const notification_service_1 = require("../../notification/services/notification.service");
const events_constants_1 = require("../constants/events.constants");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const suscription_service_1 = require("../../../suscriptions/services/suscription.service");
const events_constants_2 = require("../../../../security/groups/constants/events.constants");
const groups_entity_1 = require("../../../../security/groups/entities/groups.entity");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: notification_group_entity_1.NotificationGroup,
    createInputType: create_notification_group_input_1.CreateNotificationGroupInput,
    updateInputType: update_notification_group_input_1.UpdateNotificationGroupInput,
});
let NotificationGroupService = class NotificationGroupService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(eventEmitter, notificationConfigService, notificationService, suscriptionService) {
        super();
        this.eventEmitter = eventEmitter;
        this.notificationConfigService = notificationConfigService;
        this.notificationService = notificationService;
        this.suscriptionService = suscriptionService;
    }
    async afterCreate(context, repository, entity, createInput) {
        if (createInput.notificationConfigId)
            entity.notificationConfig = await this.notificationConfigService.findOne(context, createInput.notificationConfigId, true);
        if (createInput.groupId) {
            const [result] = await this.eventEmitter.emitAsync(events_constants_2.findGroupById, { context, input: createInput.groupId });
            if (!(result instanceof groups_entity_1.Group)) {
                throw new common_1.BadRequestException('An error occurred obtaining group: ' + result);
            }
            entity.group = result;
        }
        await this.fillGroup(context, entity, createInput);
    }
    async fillGroup(context, entity, createInput) {
        const [groups] = await this.eventEmitter.emitAsync(events_constants_2.findGroupByNotification, { context, input: createInput.notificationConfigId });
        if (!groups || !Array.isArray(groups) || groups?.some(item => !(item instanceof groups_entity_1.Group)))
            throw new common_1.NotFoundException('An error occurred obtaining groups: ' + groups);
        for (const group of groups) {
            const users = await group.users;
            await this.notificationService.createNotificationByGroup(context, users, entity, createInput.notificationConfigId, createInput.metadata);
        }
    }
    async findOneById({ context, input }) {
        try {
            return await this.findOne(context, input, true);
        }
        catch (error) {
            return error;
        }
    }
};
exports.NotificationGroupService = NotificationGroupService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.findNotificationGroupById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationGroupService.prototype, "findOneById", null);
exports.NotificationGroupService = NotificationGroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2,
        notification_config_service_1.NotificationConfigService,
        notification_service_1.NotificationService,
        suscription_service_1.SuscriptionService])
], NotificationGroupService);
//# sourceMappingURL=notification-group.service.js.map