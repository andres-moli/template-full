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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("../entities/city.entity");
const events_constants_1 = require("../../../security/auth/constants/events.constants");
const event_emitter_1 = require("@nestjs/event-emitter");
const order_by_type_enum_1 = require("../../../patterns/crud-pattern/enums/order-by-type.enum");
let CityService = class CityService {
    constructor(cityRepo) {
        this.cityRepo = cityRepo;
    }
    async city(context, id, departmentId) {
        const entity = await this.cityRepo.findOne({
            where: {
                id,
                department: {
                    id: departmentId
                }
            }
        });
        if (!entity)
            throw new common_1.NotFoundException(`object with id: ${id} not found`);
        return entity;
    }
    async cityOne(context, id, orFaill) {
        const entity = await this.cityRepo.findOne({
            where: {
                id
            }
        });
        if (!entity && orFaill)
            throw new common_1.NotFoundException(`object with id: ${id} not found`);
        return entity;
    }
    async cities(context, args) {
        const { departmentId, orderBy } = args;
        const cities = departmentId ? await this.cityRepo.findBy([
            {
                department: {
                    id: departmentId
                }
            }
        ]) : await this.cityRepo.find();
        let orderedCities;
        if (orderBy) {
            orderedCities = cities.sort((a, b) => {
                return orderBy === order_by_type_enum_1.OrderByTypes.ASC ? a.name?.localeCompare(b.name) : b.name?.localeCompare(a.name);
            });
        }
        else {
            orderedCities = cities;
        }
        return orderedCities;
    }
    async onCountry({ context, cityId, departmentId, }) {
        return await this.city(context, cityId, departmentId);
    }
};
exports.CityService = CityService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.cityEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CityService.prototype, "onCountry", null);
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CityService);
//# sourceMappingURL=city.service.js.map