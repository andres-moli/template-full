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
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const sms_manager_service_1 = require("./sms.manager.service");
const email_enum_1 = require("../../email/interface/email.enum");
const profile_service_1 = require("../../profile/services/profile.service");
let SmsService = class SmsService {
    constructor(smsManagerService, profileService) {
        this.smsManagerService = smsManagerService;
        this.profileService = profileService;
    }
    async createSms(smsArgs) {
        const dictionary = smsArgs.metadata ? JSON.parse(smsArgs.metadata) : {};
        const profile = await this.profileService.findOne({ user: undefined }, smsArgs.profileId, true);
        const message = await this.__replaceHtmlWithDictionary(smsArgs.message, dictionary);
        const smsStructure = {
            ApiKey: profile.externalId,
            FromEmail: profile.email,
            FromEmailName: profile.firstName + ' ' + profile.lastName,
            BodyType: email_enum_1.BodyType.Custom,
            Subject: smsArgs.subject,
            Message: message,
            Destinatario: {
                SmsDesTel: smsArgs.recipient.phone,
                SmsDesNom: smsArgs.recipient.name,
                SmsDesApe: smsArgs.recipient.lastName,
                SmsDesEmail: smsArgs.recipient.email
            },
            SmsDosPasos: smsArgs.twoSteps,
            LotGUID: smsArgs.notificationGroupId,
            LotName: smsArgs.notificationGroupName,
        };
        return await this.smsManagerService.sendSms(smsStructure);
    }
    getDestinataryByUser(user) {
        return {
            phone: user.phoneNumber,
            email: user.email,
            name: user.name
        };
    }
    async __replaceHtmlWithDictionary(html, dictionary) {
        let modifiedHtml = html;
        for (const key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                const value = dictionary[key];
                const tokenPattern = new RegExp(`\\[#${key}#\\]`, 'gi');
                modifiedHtml = modifiedHtml.replace(tokenPattern, value);
            }
        }
        return modifiedHtml;
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sms_manager_service_1.SmsManagerService,
        profile_service_1.ProfileService])
], SmsService);
//# sourceMappingURL=sms.service.js.map