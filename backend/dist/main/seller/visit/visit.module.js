"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../../../security/users/users.module");
const visit_resolver_1 = require("./resolver/visit.resolver");
const visit_service_1 = require("./services/visit.service");
const visit_entity_1 = require("./entities/visit.entity");
const client_module_1 = require("../client/client.module");
const parameter_module_1 = require("../../../general/parameters/parameter.module");
const visit_type_module_1 = require("../visit-type/visit-type.module");
const emial_module_1 = require("../../../general/email/emial.module");
const visit_controller_1 = require("./controller/visit.controller");
const axios_1 = require("@nestjs/axios");
const visit_coment_module_1 = require("../visit-coment/visit-coment.module");
let VisitModule = class VisitModule {
};
exports.VisitModule = VisitModule;
exports.VisitModule = VisitModule = __decorate([
    (0, common_1.Module)({
        providers: [visit_resolver_1.VisitResolver, visit_service_1.VisitService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([visit_entity_1.Visit]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            client_module_1.ClientModule,
            parameter_module_1.ParameterModule,
            visit_type_module_1.VisitTypeModule,
            emial_module_1.MailModule,
            axios_1.HttpModule,
            visit_coment_module_1.VisitComentModule
        ],
        controllers: [visit_controller_1.VisitController],
        exports: [visit_service_1.VisitService]
    })
], VisitModule);
//# sourceMappingURL=visit.module.js.map