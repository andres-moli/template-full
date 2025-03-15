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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const files_service_1 = require("../services/files.service");
const files_manager_service_1 = require("../services/files-manager.service");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
let FilesController = class FilesController {
    constructor(filesService, filesManagerService) {
        this.filesService = filesService;
        this.filesManagerService = filesManagerService;
    }
    async upload(context, files) {
        if (files?.length > 0) {
            const file = files[0];
            return await this.filesService.saveImageUrl(context, file);
        }
    }
    async download(context, id, res) {
        return await this.filesService.download(context, id, res);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file')),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('download/:id'),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "download", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('/attachment/files'),
    (0, swagger_1.ApiTags)('Attachments'),
    __metadata("design:paramtypes", [files_service_1.FilesService,
        files_manager_service_1.FilesManagerService])
], FilesController);
//# sourceMappingURL=files.controller.js.map