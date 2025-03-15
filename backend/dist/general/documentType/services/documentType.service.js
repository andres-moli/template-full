"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const documentType_entity_1 = require("../entities/documentType.entity");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const create_document_type_input_1 = require("../dto/create-document-type.input");
const update_document_type_input_1 = require("../dto/update-document-type.input");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: documentType_entity_1.DocumentType,
    createInputType: create_document_type_input_1.CreateDocumentTypeInput,
    updateInputType: update_document_type_input_1.UpdateDocumentTypeInput,
});
let DocumentTypeService = class DocumentTypeService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
};
exports.DocumentTypeService = DocumentTypeService;
exports.DocumentTypeService = DocumentTypeService = __decorate([
    (0, common_1.Injectable)()
], DocumentTypeService);
//# sourceMappingURL=documentType.service.js.map