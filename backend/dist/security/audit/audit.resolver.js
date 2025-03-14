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
exports.AuditResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const audit_service_1 = require("./audit.service");
let AuditResolver = class AuditResolver {
    constructor(auditService) {
        this.auditService = auditService;
    }
};
exports.AuditResolver = AuditResolver;
exports.AuditResolver = AuditResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [audit_service_1.AuditService])
], AuditResolver);
//# sourceMappingURL=audit.resolver.js.map