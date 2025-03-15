"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const groups_entity_1 = require("./entities/groups.entity");
const groups_service_1 = require("./services/groups.service");
const groups_resolver_1 = require("./resolvers/groups.resolver");
const notification_config_module_1 = require("../../general/notifications/notification-config/notification-config.module");
let GroupsModule = class GroupsModule {
};
exports.GroupsModule = GroupsModule;
exports.GroupsModule = GroupsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([groups_entity_1.Group]), axios_1.HttpModule, notification_config_module_1.NotificationConfigModule],
        providers: [groups_service_1.GroupsService, groups_resolver_1.GroupsResolver],
        exports: [groups_service_1.GroupsService]
    })
], GroupsModule);
//# sourceMappingURL=groups.module.js.map