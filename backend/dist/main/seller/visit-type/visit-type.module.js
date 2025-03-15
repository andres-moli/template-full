"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const visit_type_service_1 = require("./service/visit-type.service");
const visit_type_resolver_1 = require("./resolver/visit-type.resolver");
const visit_type_entity_1 = require("./entities/visit-type.entity");
let VisitTypeModule = class VisitTypeModule {
};
exports.VisitTypeModule = VisitTypeModule;
exports.VisitTypeModule = VisitTypeModule = __decorate([
    (0, common_1.Module)({
        providers: [visit_type_service_1.VisitTypeService, visit_type_resolver_1.VisitTypeResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([visit_type_entity_1.VisitType]),
        ],
        exports: [visit_type_service_1.VisitTypeService]
    })
], VisitTypeModule);
//# sourceMappingURL=visit-type.module.js.map