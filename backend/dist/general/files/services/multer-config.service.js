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
exports.GridFsMulterConfigService = void 0;
const common_1 = require("@nestjs/common");
const gridfs_1 = require("multer-gridfs-storage/lib/gridfs");
const file_modes_enum_1 = require("../enums/file-modes.enum");
let GridFsMulterConfigService = class GridFsMulterConfigService {
    constructor() {
        switch (process.env.DB_FILE_MODE) {
            case file_modes_enum_1.FileModes.mongo:
                this.gridFsStorage = new gridfs_1.GridFsStorage({
                    url: process.env.DB_MONGODB_SERVER + '/' + process.env.DB_MONGODB_NAME,
                    file: (req, file) => {
                        return new Promise((resolve, reject) => {
                            const filename = file.originalname.trim();
                            const fileInfo = {
                                filename: filename,
                            };
                            resolve(fileInfo);
                        });
                    },
                });
                break;
            case file_modes_enum_1.FileModes.buffer:
                break;
            case file_modes_enum_1.FileModes.url:
                break;
            default:
                new Error('File mode not found');
        }
    }
    createMulterOptions() {
        return {
            storage: this.gridFsStorage,
        };
    }
};
exports.GridFsMulterConfigService = GridFsMulterConfigService;
exports.GridFsMulterConfigService = GridFsMulterConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GridFsMulterConfigService);
//# sourceMappingURL=multer-config.service.js.map