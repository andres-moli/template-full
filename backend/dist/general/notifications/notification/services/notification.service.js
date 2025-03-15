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
exports.NotificationService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const bull_1 = require("@nestjs/bull");
const create_notification_input_1 = require("../dto/inputs/create-notification.input");
const update_notification_input_1 = require("../dto/inputs/update-notification.input");
const notification_entity_1 = require("../entities/notification.entity");
const type_notificartion_enum_1 = require("../enums/type-notificartion.enum");
const events_constants_1 = require("../constants/events.constants");
const state_notification_enum_1 = require("../enums/state-notification.enum");
const notification_config_entity_1 = require("../../notification-config/entities/notification-config.entity");
const notification_group_entity_1 = require("../../notification-group/entities/notification-group.entity");
const events_constants_2 = require("../../notification-group/constants/events.constants");
const events_constants_3 = require("../../notification-config/constants/events.constants");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const email_service_1 = require("../../../../external-api/certimails/email/service/email.service");
const sms_service_1 = require("../../../../external-api/certimails/sms/service/sms.service");
const wss_service_1 = require("../../../../external-api/certimails/wss/service/wss.service");
const users_service_1 = require("../../../../security/users/services/users.service");
const email_args_1 = require("../../../../external-api/certimails/email/dto/args/email.args");
const sms_args_1 = require("../../../../external-api/certimails/sms/dto/args/sms.args");
const wss_args_1 = require("../../../../external-api/certimails/wss/dto/args/wss.args");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: notification_entity_1.Notification,
    createInputType: create_notification_input_1.CreateNotificationInput,
    updateInputType: update_notification_input_1.UpdateNotificationInput,
});
let NotificationService = class NotificationService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(notificationQueue, eventEmitter, emailService, smsService, wssService, usersService) {
        super();
        this.notificationQueue = notificationQueue;
        this.eventEmitter = eventEmitter;
        this.emailService = emailService;
        this.smsService = smsService;
        this.wssService = wssService;
        this.usersService = usersService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        const user = await this.usersService.findOne(context, context.user?.id, false);
        if (createInput.notificationGroupId) {
            const [notificationGroup] = await this.eventEmitter.emitAsync(events_constants_2.findNotificationGroupById, { context, input: createInput.notificationGroupId });
            if (!(notificationGroup instanceof notification_group_entity_1.NotificationGroup)) {
                throw new common_1.BadRequestException('An error occurred obtaining notification group: ' + notificationGroup);
            }
            entity.notificationGroup = notificationGroup;
        }
        const [notificationConfig] = await this.eventEmitter.emitAsync(events_constants_3.findNotificationConfigByType, { context, type: createInput.typeConfig, subtype: createInput.subtypeConfig, orFail: true });
        if (!(notificationConfig instanceof notification_config_entity_1.NotificationConfig)) {
            throw new common_1.BadRequestException('An error occurred obtaining notification config: ' + notificationConfig);
        }
        entity.notificationConfig = notificationConfig;
        entity.hasPersistent = notificationConfig.hasPersistent;
        entity.persistentExpiration = notificationConfig.persistentExpiration;
        entity.user = user;
        if (entity.type === type_notificartion_enum_1.TypeNotification.Email) {
            await this.__buildEmail(entity, notificationConfig, createInput);
        }
        else if (entity.type === type_notificartion_enum_1.TypeNotification.Sms) {
            await this.__buildSms(entity, notificationConfig, createInput);
        }
        else if (entity.type === type_notificartion_enum_1.TypeNotification.Wss) {
            await this.__buildWss(entity, notificationConfig, createInput);
        }
        else if (entity.type === type_notificartion_enum_1.TypeNotification.Push) {
            return;
        }
    }
    async __buildEmail(entity, notificationConfig, createInput) {
        const emailArgs = new email_args_1.EmailArgs();
        emailArgs.template = {
            principal: notificationConfig.emailPrincipalCode,
            secondary: notificationConfig.emailDuplicateCode,
            metadata: createInput.metadata,
        };
        emailArgs.subject = notificationConfig.name;
        emailArgs.twoSteps = notificationConfig.hasTwoStepsEmail;
        emailArgs.notificationGroupId = createInput.notificationGroupId;
        emailArgs.notificationGroupName = createInput.notificationGroupName;
        emailArgs.profileId = notificationConfig.profile.id;
        emailArgs.recipients = createInput.emailRecipients;
        const reponse = await this.emailService.createEmail(emailArgs);
        if (reponse.HasError) {
            entity.externalMessage = reponse.ErrMessage;
            entity.stateNotification = state_notification_enum_1.StateNotification.Error;
        }
        else {
            entity.externalId = reponse.CorGUID;
            entity.stateNotification = state_notification_enum_1.StateNotification.Complete;
        }
        return;
    }
    async __buildSms(entity, notificationConfig, createInput) {
        const smsArgs = new sms_args_1.SmsArgs();
        smsArgs.message = notificationConfig.smsBody;
        smsArgs.subject = notificationConfig.name;
        smsArgs.twoSteps = notificationConfig.hasTwoStepsSms;
        smsArgs.notificationGroupId = createInput.notificationGroupId;
        smsArgs.notificationGroupName = createInput.notificationGroupName;
        smsArgs.profileId = notificationConfig.profile.id;
        smsArgs.recipient = createInput.smsRecipient;
        smsArgs.metadata = createInput.metadata;
        const reponse = await this.smsService.createSms(smsArgs);
        if (reponse.HasError) {
            entity.externalMessage = reponse.ErrMessage;
            entity.stateNotification = state_notification_enum_1.StateNotification.Error;
        }
        else {
            entity.externalId = reponse.SmsGUID;
            entity.stateNotification = state_notification_enum_1.StateNotification.Complete;
        }
        return;
    }
    async __buildWss(entity, notificationConfig, createInput) {
        const wssArgs = new wss_args_1.WssArgs();
        wssArgs.template = {
            code: notificationConfig.wssCode,
            metadata: createInput.metadata,
        };
        wssArgs.subject = notificationConfig.name;
        wssArgs.recipient = createInput.wssRecipient;
        wssArgs.twoSteps = notificationConfig.hasTwoStepsWss;
        wssArgs.notificationGroupId = createInput.notificationGroupId;
        wssArgs.notificationGroupName = createInput.notificationGroupName;
        wssArgs.profileId = notificationConfig.profile.id;
        wssArgs.recipient = createInput.wssRecipient;
        const reponse = await this.wssService.createWss(wssArgs);
        if (reponse.HasError) {
            entity.externalMessage = reponse.ErrMessage;
            entity.stateNotification = state_notification_enum_1.StateNotification.Error;
        }
        else {
            entity.externalId = reponse.WssGUID;
            entity.stateNotification = state_notification_enum_1.StateNotification.Complete;
        }
        return;
    }
    async createNotificationByGroup(context, users, notificationGroup, notificationConfigId, metadata) {
        if (users && Array.isArray(users)) {
            for (const user of users) {
                const [notificationConfig] = await this.eventEmitter.emitAsync(events_constants_3.findNotificationConfigById, { context, input: notificationConfigId });
                if (!(notificationConfig instanceof notification_config_entity_1.NotificationConfig)) {
                    throw new common_1.BadRequestException('An error occurred obtaining notification config: ' + notificationConfig);
                }
                const typeToFieldMap = {
                    [type_notificartion_enum_1.TypeNotification.Email]: 'hasEmail',
                    [type_notificartion_enum_1.TypeNotification.Sms]: 'hasSms',
                    [type_notificartion_enum_1.TypeNotification.Push]: 'hasPush',
                    [type_notificartion_enum_1.TypeNotification.Wss]: 'hasWss',
                };
                for (const type in type_notificartion_enum_1.TypeNotification) {
                    const notificationType = type_notificartion_enum_1.TypeNotification[type];
                    const field = typeToFieldMap[notificationType];
                    if (notificationConfig[field]) {
                        const createNotificationInput = {
                            type: notificationType,
                            typeConfig: notificationConfig.type,
                            subtypeConfig: notificationConfig.subtype,
                            userId: user.id,
                            notificationGroupId: notificationGroup.id,
                            notificationGroupName: notificationGroup.name,
                            emailRecipients: this.emailService.getRecipientByUser(user),
                            smsRecipient: this.smsService.getDestinataryByUser(user),
                            wssRecipient: this.wssService.getDestinataryByUser(user),
                            metadata
                        };
                        await this.notificationQueue.add(events_constants_1.createNotificationQueue, {
                            user,
                            input: createNotificationInput
                        }, {
                            priority: 2,
                            attempts: 0,
                            removeOnFail: true,
                            removeOnComplete: true
                        });
                        await this.create(context, createNotificationInput);
                    }
                }
            }
        }
        else {
            throw new common_1.NotFoundException(`group ${notificationGroup.name} has no associated users`);
        }
    }
    async createNotification({ context, input }) {
        try {
            const user = context.user;
            return await this.notificationQueue.add(events_constants_1.createNotificationQueue, {
                user,
                input
            }, {
                priority: 1,
                attempts: 0,
                removeOnFail: true,
                removeOnComplete: true
            });
        }
        catch (error) {
            return error;
        }
    }
};
exports.NotificationService = NotificationService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.createNotificationEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "createNotification", null);
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)(events_constants_1.notificationProcessor)),
    __metadata("design:paramtypes", [Object, event_emitter_1.EventEmitter2,
        email_service_1.EmailService,
        sms_service_1.SmsService,
        wss_service_1.WssService,
        users_service_1.UsersService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map