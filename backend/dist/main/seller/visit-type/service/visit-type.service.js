"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitTypeService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const visit_type_entity_1 = require("../entities/visit-type.entity");
const create_visit_type_input_1 = require("../dto/inputs/create-visit-type.input");
const update_visit_type_input_1 = require("../dto/inputs/update-visit-type.input");
const find_visit_type_args_1 = require("../dto/args/find-visit-type.args");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: visit_type_entity_1.VisitType,
    createInputType: create_visit_type_input_1.CreateVisitTypeInput,
    updateInputType: update_visit_type_input_1.UpdateVisitTypeInput,
    findArgsType: find_visit_type_args_1.FindVisitTypeArgs,
});
let VisitTypeService = class VisitTypeService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor() { super(); }
};
exports.VisitTypeService = VisitTypeService;
exports.VisitTypeService = VisitTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], VisitTypeService);
//# sourceMappingURL=visit-type.service.js.map