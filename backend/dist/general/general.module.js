"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralModule = void 0;
const common_1 = require("@nestjs/common");
const files_module_1 = require("./files/files.module");
const dummy_module_1 = require("./dummy/dummy.module");
const notifications_module_1 = require("./notifications/notifications.module");
const notification_config_module_1 = require("./notifications/notification-config/notification-config.module");
const notification_group_module_1 = require("./notifications/notification-group/notification-group.module");
const identification_module_1 = require("./identification/identification.module");
const city_module_1 = require("./city/city.module");
const department_module_1 = require("./department/department.module");
const documentType_module_1 = require("./documentType/documentType.module");
const country_module_1 = require("./country/country.module");
const pageLink_module_1 = require("./pageLink/pageLink.module");
const multikey_registers_module_1 = require("./multikey-registers/multikey-registers.module");
const position_module_1 = require("./position/position.module");
const parameter_module_1 = require("./parameters/parameter.module");
const emial_module_1 = require("./email/emial.module");
let GeneralModule = class GeneralModule {
};
exports.GeneralModule = GeneralModule;
exports.GeneralModule = GeneralModule = __decorate([
    (0, common_1.Module)({
        imports: [files_module_1.FilesModule, dummy_module_1.DummyModule, notifications_module_1.NotificationsModule, notification_config_module_1.NotificationConfigModule, notification_group_module_1.NotificationGroupModule,
            identification_module_1.IdentificationModule, city_module_1.CityModule, department_module_1.DepartmentModule, documentType_module_1.DocumentTypeModule, country_module_1.CountryModule, pageLink_module_1.PageLinkModule, multikey_registers_module_1.MultikeyRegistersModule, position_module_1.PositionModule, parameter_module_1.ParameterModule, emial_module_1.MailModule]
    })
], GeneralModule);
//# sourceMappingURL=general.module.js.map