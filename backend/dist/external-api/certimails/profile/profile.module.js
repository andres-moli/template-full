"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const profile_manager_service_1 = require("./services/profile.manager.service");
const profile_service_1 = require("./services/profile.service");
const profile_entity_1 = require("./entities/profile.entity");
const profile_resolver_1 = require("./resolvers/profile.resolver");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile]), axios_1.HttpModule],
        providers: [profile_service_1.ProfileService, profile_manager_service_1.ProfileManagerService, profile_resolver_1.ProfileResolver],
        exports: [profile_service_1.ProfileService]
    })
], ProfileModule);
//# sourceMappingURL=profile.module.js.map