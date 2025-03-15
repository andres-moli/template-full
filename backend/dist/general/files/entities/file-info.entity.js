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
exports.FileInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const file_modes_enum_1 = require("../enums/file-modes.enum");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
let FileInfo = class FileInfo extends crud_entity_1.CrudEntity {
};
exports.FileInfo = FileInfo;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FileInfo.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FileInfo.prototype, "fileExtension", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => file_modes_enum_1.FileModes),
    __metadata("design:type", String)
], FileInfo.prototype, "fileMode", void 0);
__decorate([
    (0, typeorm_1.Column)('bytea', { nullable: true, select: false }),
    __metadata("design:type", Buffer)
], FileInfo.prototype, "fileBuffer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FileInfo.prototype, "fileMongoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FileInfo.prototype, "fileUrl", void 0);
exports.FileInfo = FileInfo = __decorate([
    (0, typeorm_1.Entity)('grl_file'),
    (0, graphql_1.ObjectType)()
], FileInfo);
//# sourceMappingURL=file-info.entity.js.map