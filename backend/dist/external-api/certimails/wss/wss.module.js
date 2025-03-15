"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WssModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const wss_manager_service_1 = require("./service/wss.manager.service");
const wss_service_1 = require("./service/wss.service");
const profile_module_1 = require("../profile/profile.module");
let WssModule = class WssModule {
};
exports.WssModule = WssModule;
exports.WssModule = WssModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [profile_module_1.ProfileModule, axios_1.HttpModule],
        providers: [wss_service_1.WssService, wss_manager_service_1.WssManagerService],
        exports: [wss_service_1.WssService]
    })
], WssModule);
//# sourceMappingURL=wss.module.js.map