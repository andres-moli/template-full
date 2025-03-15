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
exports.EmailRecipient = exports.EmailAditionalInfo = exports.EmailArgs = exports.EmailTemplate = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const email_enum_1 = require("../../interface/email.enum");
const graphql_1 = require("@nestjs/graphql");
class EmailTemplate {
}
exports.EmailTemplate = EmailTemplate;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmailTemplate.prototype, "principal", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailTemplate.prototype, "secondary", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailTemplate.prototype, "metadata", void 0);
class EmailArgs {
}
exports.EmailArgs = EmailArgs;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailArgs.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailArgs.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailArgs.prototype, "notificationGroupId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailArgs.prototype, "notificationGroupName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], EmailArgs.prototype, "profileId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EmailArgs.prototype, "twoSteps", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => EmailTemplate),
    __metadata("design:type", EmailTemplate)
], EmailArgs.prototype, "template", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => EmailRecipient),
    __metadata("design:type", Array)
], EmailArgs.prototype, "recipients", void 0);
class EmailAditionalInfo {
}
exports.EmailAditionalInfo = EmailAditionalInfo;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailAditionalInfo.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailAditionalInfo.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailAditionalInfo.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailAditionalInfo.prototype, "phone", void 0);
let EmailRecipient = class EmailRecipient {
};
exports.EmailRecipient = EmailRecipient;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], EmailRecipient.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(email_enum_1.RecipientType),
    (0, graphql_1.Field)(() => email_enum_1.RecipientType),
    __metadata("design:type", String)
], EmailRecipient.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => EmailAditionalInfo),
    __metadata("design:type", EmailAditionalInfo)
], EmailRecipient.prototype, "aditionalInfo", void 0);
exports.EmailRecipient = EmailRecipient = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], EmailRecipient);
//# sourceMappingURL=email.args.js.map