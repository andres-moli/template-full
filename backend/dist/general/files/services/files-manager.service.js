"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesManagerService = void 0;
const common_1 = require("@nestjs/common");
const mongo_gridfs_1 = require("mongo-gridfs");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const content_type_1 = require("../functions/content-type");
let FilesManagerService = class FilesManagerService {
    constructor(connection) {
        this.connection = connection;
        this.fileModel = new mongo_gridfs_1.MongoGridFS(connection?.db, 'fs');
    }
    async readStream(id) {
        return await this.fileModel.readFileStream(id);
    }
    async uploadFile(body) {
        try {
            const parseFileName = this.parseFileName(body.filename);
            const tempFolder = path.join(__dirname, '..', 'temp');
            const filePath = path.join(tempFolder, `${parseFileName.fileName}.${parseFileName.fileType.toLowerCase()}`);
            return await this.saveStream({
                filename: body.filename,
                mimetype: (0, content_type_1.getMimeTypeFromExtension)(parseFileName.fileType),
                path: filePath
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async saveStream(file) {
        const fileReadStream = fs.createReadStream(file.path);
        const file_uploaded = await this.fileModel.writeFileStream(fileReadStream, {
            filename: file.filename,
            contentType: file.mimetype,
        });
        return file_uploaded._id.toString();
    }
    async findInfo(id) {
        const result = await this.fileModel
            .findById(id)
            .catch((err) => {
            throw new common_1.NotFoundException('File not found');
        })
            .then((result) => result);
        return {
            filename: result.filename,
            length: result.length,
            chunkSize: result.chunkSize,
            md5: result.md5,
            contentType: result.contentType,
        };
    }
    async deleteFile(id) {
        return await this.fileModel.delete(id);
    }
    async donwloadFile(id) {
        return this.fileModel.downloadFile(id);
    }
    parseFileName(fileName) {
        const fileExtension = fileName.match(/\.[^.]*$/)[0];
        const fileType = fileExtension.slice(1);
        const fileNameWithoutExtension = fileName.replace(fileExtension, '').trim();
        return {
            fileName: fileNameWithoutExtension,
            fileType: fileType,
            fileExtension: fileExtension,
        };
    }
};
exports.FilesManagerService = FilesManagerService;
exports.FilesManagerService = FilesManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [mongoose_2.Connection])
], FilesManagerService);
//# sourceMappingURL=files-manager.service.js.map