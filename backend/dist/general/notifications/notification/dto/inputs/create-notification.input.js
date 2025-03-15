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
exports.CreateNotificationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const type_notificartion_enum_1 = require("../../enums/type-notificartion.enum");
const email_args_1 = require("../../../../../external-api/certimails/email/dto/args/email.args");
const sms_args_1 = require("../../../../../external-api/certimails/sms/dto/args/sms.args");
const wss_args_1 = require("../../../../../external-api/certimails/wss/dto/args/wss.args");
const notification_type_enum_1 = require("../../../notification-config/enums/notification-type.enum");
let CreateNotificationInput = class CreateNotificationInput {
};
exports.CreateNotificationInput = CreateNotificationInput;
__decorate([
    (0, graphql_1.Field)(() => type_notificartion_enum_1.TypeNotification),
    (0, class_validator_1.IsEnum)(type_notificartion_enum_1.TypeNotification),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [email_args_1.EmailRecipient], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateNotificationInput.prototype, "emailRecipients", void 0);
__decorate([
    (0, graphql_1.Field)(() => sms_args_1.SmsRecipient, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", sms_args_1.SmsRecipient)
], CreateNotificationInput.prototype, "smsRecipient", void 0);
__decorate([
    (0, graphql_1.Field)(() => wss_args_1.WssRecipient, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", wss_args_1.WssRecipient)
], CreateNotificationInput.prototype, "wssRecipient", void 0);
__decorate([
    (0, graphql_1.Field)(() => notification_type_enum_1.NotificationTypes),
    (0, class_validator_1.IsEnum)(notification_type_enum_1.NotificationTypes),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "typeConfig", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "subtypeConfig", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "notificationGroupId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "notificationGroupName", void 0);
exports.CreateNotificationInput = CreateNotificationInput = __decorate([
    (0, graphql_1.InputType)()
], CreateNotificationInput);
//# sourceMappingURL=create-notification.input.js.map