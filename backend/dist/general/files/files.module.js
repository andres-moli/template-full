"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./services/files.service");
const files_manager_service_1 = require("./services/files-manager.service");
const files_resolver_1 = require("./resolvers/files.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const file_info_entity_1 = require("./entities/file-info.entity");
const platform_express_1 = require("@nestjs/platform-express");
const axios_1 = require("@nestjs/axios");
const multer_config_service_1 = require("./services/multer-config.service");
const files_controller_1 = require("./controllers/files.controller");
let FilesModule = class FilesModule {
};
exports.FilesModule = FilesModule;
exports.FilesModule = FilesModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [files_resolver_1.FilesResolver, files_service_1.FilesService, files_manager_service_1.FilesManagerService, multer_config_service_1.GridFsMulterConfigService],
        imports: [typeorm_1.TypeOrmModule.forFeature([file_info_entity_1.FileInfo]),
            platform_express_1.MulterModule.registerAsync({
                useClass: multer_config_service_1.GridFsMulterConfigService,
            }),
            axios_1.HttpModule
        ],
        controllers: [files_controller_1.FilesController],
        exports: [files_service_1.FilesService]
    })
], FilesModule);
//# sourceMappingURL=files.module.js.map