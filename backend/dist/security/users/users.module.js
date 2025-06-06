"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./services/users.service");
const users_resolver_1 = require("./resolvers/users.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const users_notification_service_1 = require("./services/users.notification.service");
const auth_service_1 = require("../auth/auth.service");
const user_key_entity_1 = require("./entities/user-key.entity");
const users_key_service_1 = require("./services/users-key.service");
const user_key_resolver_1 = require("./resolvers/user-key.resolver");
const emial_module_1 = require("../../general/email/emial.module");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, user_key_entity_1.UserKey]),
            emial_module_1.MailModule
        ],
        providers: [
            users_resolver_1.UsersResolver,
            users_service_1.UsersService,
            users_notification_service_1.UsersNotificationService,
            auth_service_1.AuthService,
            users_key_service_1.UsersKeyService,
            user_key_resolver_1.UserKeyResolver,
        ],
        exports: [
            users_service_1.UsersService
        ]
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map