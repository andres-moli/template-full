"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertimailsModule = void 0;
const common_1 = require("@nestjs/common");
const email_module_1 = require("./email/email.module");
const sms_module_1 = require("./sms/sms.module");
const profile_module_1 = require("./profile/profile.module");
const wss_module_1 = require("./wss/wss.module");
let CertimailsModule = class CertimailsModule {
};
exports.CertimailsModule = CertimailsModule;
exports.CertimailsModule = CertimailsModule = __decorate([
    (0, common_1.Module)({
        imports: [email_module_1.EmailModule, sms_module_1.SmsModule, wss_module_1.WssModule, profile_module_1.ProfileModule]
    })
], CertimailsModule);
//# sourceMappingURL=certimails.module.js.map