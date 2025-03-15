"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../../../security/users/users.module");
const client_resolver_1 = require("./resolvers/client.resolver");
const client_service_1 = require("./services/client.service");
const client_notification_service_1 = require("./services/client.notification.service");
const client_entity_1 = require("./entities/client.entity");
const department_module_1 = require("../../../general/department/department.module");
const city_module_1 = require("../../../general/city/city.module");
const client_contact_service_1 = require("./services/client-contact.service");
const client_contact_resolver_1 = require("./resolvers/client-contact.resolver");
const client_contact_entity_1 = require("./entities/client-contact.entity");
const emial_module_1 = require("../../../general/email/emial.module");
let ClientModule = class ClientModule {
};
exports.ClientModule = ClientModule;
exports.ClientModule = ClientModule = __decorate([
    (0, common_1.Module)({
        providers: [client_resolver_1.ClientResolver, client_service_1.ClientService, client_notification_service_1.ClientNotificationService, client_contact_service_1.ClientContactService, client_contact_resolver_1.ClientContactResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, client_contact_entity_1.ClientContact]),
            users_module_1.UsersModule,
            department_module_1.DepartmentModule,
            city_module_1.CityModule,
            emial_module_1.MailModule
        ],
        exports: [client_service_1.ClientService]
    })
], ClientModule);
//# sourceMappingURL=client.module.js.map