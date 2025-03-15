"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditModule = void 0;
const common_1 = require("@nestjs/common");
const audit_service_1 = require("./audit.service");
const audit_resolver_1 = require("./audit.resolver");
const audit_service_interface_1 = require("../../patterns/crud-pattern/interfaces/audit-service.interface");
const AuditProvider = {
    provide: audit_service_interface_1.IAuditService,
    useClass: audit_service_1.AuditService
};
let AuditModule = class AuditModule {
};
exports.AuditModule = AuditModule;
exports.AuditModule = AuditModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [audit_resolver_1.AuditResolver, audit_service_1.AuditService, AuditProvider],
        exports: [AuditProvider]
    })
], AuditModule);
//# sourceMappingURL=audit.module.js.map