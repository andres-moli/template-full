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
exports.ParameterService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const parameter_entity_1 = require("../entities/parameter.entity");
const create_entity_inpit_1 = require("../dto/create-entity.inpit");
const update_entity_input_1 = require("../dto/update-entity.input");
const type_parameter_enum_1 = require("../emun/type-parameter.enum");
const files_service_1 = require("../../files/services/files.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: parameter_entity_1.Parameter,
    createInputType: create_entity_inpit_1.CreateParametersInput,
    updateInputType: update_entity_input_1.UpdateParametersInput,
});
let ParameterService = class ParameterService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(filesService) {
        super();
        this.filesService = filesService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        const findOldCode = await repository.findOne({
            where: {
                codigo: createInput.codigo
            }
        });
        if (findOldCode)
            throw Error(`Ya existe un codigo con este codigo - [${createInput.codigo}]`);
        if (createInput.type == type_parameter_enum_1.TypeParameterEnum.file && createInput.valueFileId) {
            entity.valueFile = await this.filesService.findOne(context, createInput.valueFileId, true);
        }
    }
    async findOneCodigo(context, codigo, orFaile = false) {
        const repository = this.getRepository(context);
        if (!codigo)
            throw new Error(`the code cannot come null`);
        const findOne = await repository.findOne({
            where: {
                codigo: codigo
            }
        });
        if (!findOne && orFaile)
            throw new Error(`not found parameter by code - [${codigo}]`);
        if (!findOne)
            return null;
        switch (findOne.type) {
            case type_parameter_enum_1.TypeParameterEnum.date:
                return findOne.valueDate;
            case type_parameter_enum_1.TypeParameterEnum.number:
                return findOne.valueInt;
            case type_parameter_enum_1.TypeParameterEnum.string:
                return findOne.valueString;
            case type_parameter_enum_1.TypeParameterEnum.file:
                return await findOne.valueFile;
        }
    }
};
exports.ParameterService = ParameterService;
exports.ParameterService = ParameterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], ParameterService);
//# sourceMappingURL=parameter.service.js.map