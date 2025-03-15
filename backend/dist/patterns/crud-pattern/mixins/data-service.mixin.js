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
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const audit_service_interface_1 = require("../interfaces/audit-service.interface");
const QueryBuilder_helper_1 = require("../helpers/QueryBuilder.helper");
function DataService(entityType, findArgsType, contextType) {
    class QBHelper extends (0, QueryBuilder_helper_1.QueryBuilderHelper)(entityType, findArgsType) {
    }
    let DataService = class DataService {
        getRepository(context) {
            if (context?.transactionManager)
                return context.transactionManager.getRepository(entityType);
            return this._repository;
        }
        getQueryBuilder(context, args) {
            const repository = this.getRepository(context);
            return QBHelper.getQueryBuilder(repository, args);
        }
        async find(context, options) {
            const repository = this.getRepository(context);
            return repository.find(options);
        }
        async findAll(context, args) {
            const queryBuilder = this.getQueryBuilder(context, args);
            return queryBuilder.getMany();
        }
        async findOneArg(context, args) {
            const queryBuilder = this.getQueryBuilder(context, args);
            return queryBuilder.getOne();
        }
        async Count(context, args) {
            const queryBuilder = this.getQueryBuilder(context, {
                ...args,
                pagination: undefined,
                orderBy: undefined,
            });
            const totalItems = await queryBuilder.getCount();
            const itemsPerPage = args.pagination.take;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const currentPage = Math.ceil((args.pagination.skip + 1) / itemsPerPage);
            return {
                totalItems,
                itemsPerPage,
                totalPages,
                currentPage
            };
        }
        async findOne(context, id, orFail) {
            const repository = this.getRepository(context);
            const entity = await repository.findOneBy({
                id,
            });
            if (orFail && !entity)
                throw new common_1.NotFoundException(`object with id: ${JSON.stringify(id)} not found`);
            return entity;
        }
        getFilterableFields(targetClass) {
            const filterableFields = [];
            const propertyNames = Object.getOwnPropertyNames(targetClass.prototype);
            for (const propertyName of propertyNames) {
                const isFilterable = !!Reflect.getMetadata('graphql:filterableField', targetClass.prototype, propertyName);
                filterableFields.push({
                    propertyName,
                    isFilterable,
                });
            }
            return filterableFields;
        }
        async Audit(context, action, objectId, valueBefore, valueAfter) {
            if (context.disableAudits)
                return;
            if (!this._auditService)
                return;
            const serviceName = this.constructor.name;
            this._auditService.Audit(context, serviceName, action, JSON.stringify(objectId), valueBefore, valueAfter);
        }
    };
    __decorate([
        (0, common_1.Inject)(audit_service_interface_1.IAuditService),
        (0, common_1.Optional)(),
        __metadata("design:type", Object)
    ], DataService.prototype, "_auditService", void 0);
    __decorate([
        (0, typeorm_1.InjectRepository)(entityType),
        __metadata("design:type", typeorm_2.Repository)
    ], DataService.prototype, "_repository", void 0);
    DataService = __decorate([
        (0, common_1.Injectable)()
    ], DataService);
    return (0, common_1.mixin)(DataService);
}
exports.DataService = DataService;
//# sourceMappingURL=data-service.mixin.js.map