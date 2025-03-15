"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FletesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fletes_service_1 = require("./service/fletes.service");
const fletes_resolver_1 = require("./resolver/fletes.resolver");
const fletes_entity_1 = require("./entities/fletes.entity");
const axios_1 = require("@nestjs/axios");
const documentFletes_entity_1 = require("./entities/documentFletes.entity");
let FletesModule = class FletesModule {
};
exports.FletesModule = FletesModule;
exports.FletesModule = FletesModule = __decorate([
    (0, common_1.Module)({
        providers: [fletes_service_1.FletesService, fletes_resolver_1.FletesResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([fletes_entity_1.Fletes, documentFletes_entity_1.FletesDocument]),
            axios_1.HttpModule
        ],
        exports: [fletes_service_1.FletesService]
    })
], FletesModule);
//# sourceMappingURL=fletes.module.js.map