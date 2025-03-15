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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const departament_entity_1 = require("../entities/departament.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const events_constants_1 = require("../../../security/auth/constants/events.constants");
const event_emitter_1 = require("@nestjs/event-emitter");
const order_by_type_enum_1 = require("../../../patterns/crud-pattern/enums/order-by-type.enum");
let DepartmentService = class DepartmentService {
    constructor(departmentRepo) {
        this.departmentRepo = departmentRepo;
    }
    async department(context, id, countryId) {
        const entity = await this.departmentRepo.findOne({
            where: {
                id,
                country: {
                    id: countryId
                }
            }
        });
        if (!entity)
            throw new common_1.NotFoundException(`object with id: ${id} not found`);
        return entity;
    }
    async departmentOne(context, id, orFaill) {
        const entity = await this.departmentRepo.findOne({
            where: {
                id
            }
        });
        console.log(id, entity);
        if (!entity && orFaill)
            throw new common_1.NotFoundException(`object with id: ${id} not found`);
        return entity;
    }
    async departments(context, args) {
        const { countryId, orderBy } = args;
        const departments = await this.departmentRepo.find({
            where: {
                country: {
                    id: countryId
                }
            }
        });
        let orderedDepartments;
        if (orderBy) {
            orderedDepartments = departments.sort((a, b) => {
                return orderBy === order_by_type_enum_1.OrderByTypes.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            });
        }
        else {
            orderedDepartments = departments;
        }
        return orderedDepartments;
    }
    async onDepartment({ context, departmentId, countryId, }) {
        return await this.department(context, departmentId, countryId);
    }
};
exports.DepartmentService = DepartmentService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.departmentEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentService.prototype, "onDepartment", null);
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departament_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartmentService);
//# sourceMappingURL=department.service.js.map