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
exports.FilesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const file_info_entity_1 = require("../entities/file-info.entity");
const files_service_1 = require("../services/files.service");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
let FilesResolver = class FilesResolver {
    constructor(service) {
        this.service = service;
    }
    async findOne(id, context) {
        return this.service.findOne(context, id);
    }
    async getUrl(file, context) {
        return `${process.env.BASE_URL}${file.fileUrl}`;
    }
};
exports.FilesResolver = FilesResolver;
__decorate([
    (0, graphql_1.Query)(() => file_info_entity_1.FileInfo, { name: "file" }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => String, { name: "url" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [file_info_entity_1.FileInfo, Object]),
    __metadata("design:returntype", Promise)
], FilesResolver.prototype, "getUrl", null);
exports.FilesResolver = FilesResolver = __decorate([
    (0, graphql_1.Resolver)((of) => file_info_entity_1.FileInfo),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesResolver);
//# sourceMappingURL=files.resolver.js.map