"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyModule = void 0;
const common_1 = require("@nestjs/common");
const dummy_service_1 = require("./services/dummy.service");
const dummy_resolver_1 = require("./resolvers/dummy.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const dummy_entity_1 = require("./entities/dummy.entity");
const dummy_item_entity_1 = require("./entities/dummy-item.entity");
const dummy_type_entity_1 = require("./entities/dummy-type.entity");
const dummy_group_entity_1 = require("./entities/dummy-group.entity");
const dummy_family_entity_1 = require("./entities/dummy-family.entity");
const dummy_notification_service_1 = require("./services/dummy.notification.service");
const users_module_1 = require("../../security/users/users.module");
let DummyModule = class DummyModule {
};
exports.DummyModule = DummyModule;
exports.DummyModule = DummyModule = __decorate([
    (0, common_1.Module)({
        providers: [dummy_resolver_1.DummyResolver, dummy_service_1.DummyService, dummy_notification_service_1.DummyNotificationService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dummy_entity_1.Dummy, dummy_item_entity_1.DummyItem, dummy_type_entity_1.DummyType, dummy_group_entity_1.DummyGroup, dummy_family_entity_1.DummyFamily]),
            users_module_1.UsersModule
        ]
    })
], DummyModule);
//# sourceMappingURL=dummy.module.js.map