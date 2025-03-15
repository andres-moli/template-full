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
exports.WssService = void 0;
const common_1 = require("@nestjs/common");
const wss_manager_service_1 = require("./wss.manager.service");
const profile_service_1 = require("../../profile/services/profile.service");
let WssService = class WssService {
    constructor(wssManagerService, profileService) {
        this.wssManagerService = wssManagerService;
        this.profileService = profileService;
    }
    async createWss(wssArgs) {
        const profile = await this.profileService.findOne({ user: undefined }, wssArgs.profileId, true);
        const wssStructure = {
            ApiKey: profile.externalId,
            PersNom: wssArgs.recipient.name,
            PersNumDoc: wssArgs.recipient.document,
            Subject: wssArgs.subject,
            TelIndicativo: wssArgs.recipient.phonePrefix,
            TelNumber: wssArgs.recipient.phone,
            type: "TemplateMessage",
            TemplateMessage: {
                guid: wssArgs.template.code,
                metadata: wssArgs.template.metadata
            },
            WssDosPasos: wssArgs.twoSteps,
            LotGUID: wssArgs.notificationGroupId,
            LotName: wssArgs.notificationGroupName
        };
        return await this.wssManagerService.sendWss(wssStructure);
    }
    getDestinataryByUser(user) {
        return {
            phone: user.phoneNumber,
            phonePrefix: '57',
            name: user.name,
            document: user.identificationNumber,
        };
    }
};
exports.WssService = WssService;
exports.WssService = WssService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wss_manager_service_1.WssManagerService,
        profile_service_1.ProfileService])
], WssService);
//# sourceMappingURL=wss.service.js.map