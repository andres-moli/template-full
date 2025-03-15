"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerModule = void 0;
const common_1 = require("@nestjs/common");
const visit_module_1 = require("./visit/visit.module");
const visit_coment_module_1 = require("./visit-coment/visit-coment.module");
const visit_type_module_1 = require("./visit-type/visit-type.module");
const fletes_module_1 = require("./fletes/fletes.module");
let SellerModule = class SellerModule {
};
exports.SellerModule = SellerModule;
exports.SellerModule = SellerModule = __decorate([
    (0, common_1.Module)({
        imports: [visit_module_1.VisitModule, visit_coment_module_1.VisitComentModule, visit_type_module_1.VisitTypeModule, fletes_module_1.FletesModule]
    })
], SellerModule);
//# sourceMappingURL=seller.module.js.map