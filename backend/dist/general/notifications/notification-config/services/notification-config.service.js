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
exports.NotificationConfigService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_notification_config_input_1 = require("../dto/inputs/create-notification-config.input");
const update_notification_config_input_1 = require("../dto/inputs/update-notification-config.input");
const notification_config_entity_1 = require("../entities/notification-config.entity");
const notification_subtype_enum_1 = require("../enums/notification-subtype.enum");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("../constants/events.constants");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const profile_service_1 = require("../../../../external-api/certimails/profile/services/profile.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: notification_config_entity_1.NotificationConfig,
    createInputType: create_notification_config_input_1.CreateNotificationConfigInput,
    updateInputType: update_notification_config_input_1.UpdateNotificationConfigInput,
});
let NotificationConfigService = class NotificationConfigService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(profileService) {
        super();
        this.profileService = profileService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        if (createInput.profileId)
            entity.profile = await this.profileService.findOne(context, createInput.profileId, true);
        this.__validateMutation(entity);
    }
    async beforeUpdate(context, repository, entity, updateInput) {
        if (updateInput.profileId)
            entity.profile = await this.profileService.findOne(context, updateInput.profileId, true);
        this.__validateMutation(entity);
    }
    __validateMutation(entity) {
        if (!entity.profile)
            throw new common_1.BadRequestException('Certimails profile is required');
        if (entity.hasEmail && !entity.emailPrincipalCode)
            throw new common_1.BadRequestException('Principal email template is missing to use email delivery');
        if (entity.hasEmail && !entity.emailDuplicateCode)
            throw new common_1.BadRequestException('Duplicate email template is missing to use email delivery');
        if (entity.hasSms && !entity.smsBody)
            throw new common_1.BadRequestException('Sms template is missing to use sms delivery');
        if (entity.hasWss && !entity.wssCode)
            throw new common_1.BadRequestException('Wss template is missing to use wss delivery');
        if (entity.hasPersistent && !entity.persistentExpiration)
            throw new common_1.BadRequestException('Expiration date persistent is required');
        if (entity.hasPersistent && !entity.persistentHtml)
            throw new common_1.BadRequestException('Html persistent is required');
        const validSubtypes = notification_subtype_enum_1.NotificationSubtypes[entity.type];
        if (!validSubtypes)
            throw new common_1.BadRequestException(`Invalid notification type: ${entity.type}, does not contain subtypes`);
        if (!validSubtypes.some(validSubtype => validSubtype.name === entity.subtype))
            throw new common_1.BadRequestException(`Invalid subtype for notification type ${entity.type}: ${entity.subtype}`);
    }
    async findOneByType({ context, type, subtype, orFail }) {
        try {
            const repository = this.getRepository(context);
            const entity = await repository.findOneBy({ type, subtype });
            if (orFail && !entity)
                throw new common_1.NotFoundException(`object with type: ${type} & subtype: ${subtype} not found`);
            return entity;
        }
        catch (error) {
            return error;
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
exports.NotificationConfigService = NotificationConfigService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.findNotificationConfigByType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationConfigService.prototype, "findOneByType", null);
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.findNotificationConfigById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationConfigService.prototype, "findOneById", null);
exports.NotificationConfigService = NotificationConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], NotificationConfigService);
//# sourceMappingURL=notification-config.service.js.map