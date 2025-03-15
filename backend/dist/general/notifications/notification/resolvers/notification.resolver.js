"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const notification_entity_1 = require("../entities/notification.entity");
const notification_service_1 = require("../services/notification.service");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../../security/auth/decorators/public.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...notification_service_1.serviceStructure,
    serviceType: notification_service_1.NotificationService,
    create: { name: 'createNotification', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updateNotification', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removeNotification', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'notification', decorators: [public_decorator_1.Public] },
    findAll: { name: 'notifications', decorators: [public_decorator_1.Public] },
});
let NotificationResolver = class NotificationResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.NotificationResolver = NotificationResolver;
exports.NotificationResolver = NotificationResolver = __decorate([
    (0, graphql_1.Resolver)(() => notification_entity_1.Notification)
], NotificationResolver);
//# sourceMappingURL=notification.resolver.js.map