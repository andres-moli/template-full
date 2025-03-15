"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitComentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const visit_coment_entity_1 = require("./entities/visit-coment.entity");
const visit_coment_service_1 = require("./services/visit-coment.service");
const visit_coment_resolver_1 = require("./resolver/visit-coment.resolver");
const visit_module_1 = require("../visit/visit.module");
const files_module_1 = require("../../../general/files/files.module");
let VisitComentModule = class VisitComentModule {
};
exports.VisitComentModule = VisitComentModule;
exports.VisitComentModule = VisitComentModule = __decorate([
    (0, common_1.Module)({
        providers: [visit_coment_service_1.VisitComentService, visit_coment_resolver_1.VisitComentResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([visit_coment_entity_1.VisitComent]),
            (0, common_1.forwardRef)(() => visit_module_1.VisitModule),
            files_module_1.FilesModule
        ],
        exports: [visit_coment_service_1.VisitComentService]
    })
], VisitComentModule);
//# sourceMappingURL=visit-coment.module.js.map