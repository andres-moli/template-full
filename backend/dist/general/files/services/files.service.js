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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const file_info_entity_1 = require("../entities/file-info.entity");
const file_modes_enum_1 = require("../enums/file-modes.enum");
const files_manager_service_1 = require("./files-manager.service");
const content_type_1 = require("../functions/content-type");
const data_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/data-service.mixin");
const fs_1 = require("fs");
const path_1 = require("path");
const uuid_1 = require("uuid");
let FilesService = class FilesService extends (0, data_service_mixin_1.DataService)(file_info_entity_1.FileInfo) {
    constructor(filesManagerService) {
        super();
        this.filesManagerService = filesManagerService;
    }
    async create(context, createFileInput) {
        const file = {};
        const mongoData = this.filesManagerService.parseFileName(createFileInput.fileName);
        file.fileExtension = mongoData.fileType;
        file.fileMode = process.env.DB_FILE_MODE;
        file.fileName = mongoData.fileName;
        file.fileMongoId = createFileInput.fileMongoId;
        file.fileBuffer = createFileInput.fileBuffer ? Buffer.from(createFileInput.fileBuffer, 'base64') : null;
        const repository = this.getRepository(context);
        const result = await repository.save(file);
        delete result.fileBuffer;
        return result;
    }
    async saveImageUrl(context, file) {
        const repository = this.getRepository(context);
        const dataFile = this.filesManagerService.parseFileName(file.originalname);
        const fileName = `${Date.now()}-${(0, uuid_1.v4)()}${dataFile.fileExtension}`;
        const filePath = (0, path_1.join)(__dirname, '..', '..', '..', '..', 'public', fileName);
        (0, fs_1.writeFileSync)(filePath, file.buffer);
        const fileInfo = {};
        const url = `public/${fileName}`;
        const mongoData = this.filesManagerService.parseFileName(fileName);
        fileInfo.fileName = mongoData.fileName;
        fileInfo.fileExtension = mongoData.fileType;
        fileInfo.fileMode = process.env.DB_FILE_MODE;
        fileInfo.fileName = mongoData.fileName;
        fileInfo.fileUrl = url;
        const result = await repository.save(fileInfo);
        return result;
    }
    async download(context, id, res) {
        const repository = this.getRepository(context);
        const entity = await repository.findOne({ where: { id }, select: ["fileBuffer", "fileExtension", "fileMode", "fileMongoId", "fileName"] });
        res.header('Content-Type', await (0, content_type_1.getMimeTypeFromExtension)(entity.fileExtension));
        res.header('Content-Disposition', `attachment; filename=${entity.fileName}.${entity.fileExtension}`);
        switch (entity.fileMode) {
            case file_modes_enum_1.FileModes.mongo:
                const fileStream = await this.filesManagerService.readStream(entity.fileMongoId?.trim());
                if (!fileStream) {
                    throw new common_1.InternalServerErrorException('File not found');
                }
                fileStream.once('error', (error) => {
                    throw new common_1.InternalServerErrorException('File can´t read, ' + error);
                });
                fileStream.pipe(res);
                break;
            case file_modes_enum_1.FileModes.buffer:
                res.send(entity.fileBuffer);
                break;
            case file_modes_enum_1.FileModes.url:
                break;
            default:
                throw new common_1.BadRequestException('File mode not found');
        }
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_manager_service_1.FilesManagerService])
], FilesService);
//# sourceMappingURL=files.service.js.map