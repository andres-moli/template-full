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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitComentService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const find_visit_coment_args_1 = require("../dto/args/find-visit-coment.args");
const visit_coment_entity_1 = require("../entities/visit-coment.entity");
const create_visit_coment_input_1 = require("../dto/inputs/create-visit-coment.input");
const update_visit_coment_input_1 = require("../dto/inputs/update-visit-coment.input");
const visit_service_1 = require("../../visit/services/visit.service");
const moment_1 = __importDefault(require("moment"));
const files_service_1 = require("../../../../general/files/services/files.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: visit_coment_entity_1.VisitComent,
    createInputType: create_visit_coment_input_1.CreateVisitComentInput,
    updateInputType: update_visit_coment_input_1.UpdateVisitComentInput,
    findArgsType: find_visit_coment_args_1.FindVisitComentArgs,
});
let VisitComentService = class VisitComentService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(visitService, fileService) {
        super();
        this.visitService = visitService;
        this.fileService = fileService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        entity.visit = await this.visitService.findOne(context, createInput.visitId, true);
        entity.user = await context.user;
        entity.dateFull = (0, moment_1.default)((0, moment_1.default)(createInput.dateFull).format('YYYY-MM-DD HH:mm')).local().toDate();
        if (createInput.fileId) {
            entity.file = await this.fileService.findOne(context, createInput.fileId, true);
        }
    }
    async afterCreate(context, repository, entity, createInput) {
        if (entity.mocked) {
            this.visitService.sendMailMockedFail(context, entity);
        }
    }
};
exports.VisitComentService = VisitComentService;
exports.VisitComentService = VisitComentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => visit_service_1.VisitService))),
    __metadata("design:paramtypes", [visit_service_1.VisitService,
        files_service_1.FilesService])
], VisitComentService);
//# sourceMappingURL=visit-coment.service.js.map