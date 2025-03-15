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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const email_manager_service_1 = require("./email.manager.service");
const profile_service_1 = require("../../profile/services/profile.service");
const email_enum_1 = require("../interface/email.enum");
let EmailService = class EmailService {
    constructor(emailManagerService, profileService) {
        this.emailManagerService = emailManagerService;
        this.profileService = profileService;
    }
    async createEmail(emailArgs) {
        const profile = await this.profileService.findOne({ user: undefined }, emailArgs.profileId, true);
        await this.__hasValidRecipient(emailArgs.recipients);
        const emailStructure = {
            ApiKey: profile.externalId,
            FromEmail: profile.email,
            FromEmailName: profile.firstName + ' ' + profile.lastName,
            BodyType: email_enum_1.BodyType.Code,
            Subject: emailArgs.subject,
            CorDosPasos: emailArgs.twoSteps,
            LotGUID: emailArgs.notificationGroupId,
            LotName: emailArgs.notificationGroupName,
            Plantilla: {
                CorTplCod: emailArgs.template.principal,
                CorTplCod02: emailArgs.template.secondary,
                CorTplMdata: emailArgs.template.metadata
            },
            Recipients: emailArgs.recipients.map(recipient => {
                return {
                    Email: recipient.email,
                    Type: recipient.type,
                    AditionalInfo: {
                        Name: recipient.aditionalInfo?.name,
                        LastName: recipient.aditionalInfo?.lastName,
                        Id: recipient.aditionalInfo?.id,
                        Phone: recipient.aditionalInfo?.phone
                    }
                };
            })
        };
        return await this.emailManagerService.sendEmail(emailStructure);
    }
    getRecipientByUser(user) {
        return [{
                email: user.email,
                type: email_enum_1.RecipientType.Destinatary,
                aditionalInfo: {
                    name: user.name,
                    lastName: user.lastName,
                    phone: user.phoneNumber,
                    id: user.identificationNumber,
                }
            }];
    }
    async __hasValidRecipient(recipients) {
        const to_s = await recipients.filter((item) => item.type === email_enum_1.RecipientType.Destinatary && item.email);
        if (to_s.length === 0)
            throw new common_1.BadRequestException('Has no available recipients');
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_manager_service_1.EmailManagerService,
        profile_service_1.ProfileService])
], EmailService);
//# sourceMappingURL=email.service.js.map