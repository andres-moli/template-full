"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = exports.CrudServiceFrom = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const auto_increment_decorator_1 = require("../decorators/auto-increment.decorator");
const data_service_mixin_1 = require("./data-service.mixin");
const standard_actions_enum_1 = require("../enums/standard-actions.enum");
function CrudServiceFrom(structure) {
    const { entityType, createInputType, updateInputType, contextType, findArgsType } = structure;
    return CrudService(entityType, createInputType, updateInputType, findArgsType, contextType);
}
exports.CrudServiceFrom = CrudServiceFrom;
function CrudService(entityType, createInputType, updateInputType, findArgsType, contextType) {
    let CrudService = class CrudService extends (0, data_service_mixin_1.DataService)(entityType, findArgsType, contextType) {
        async create(context, createInput, eventHandler = this) {
            const repository = this.getRepository(context);
            const entity = repository.create(createInput);
            await eventHandler.beforeCreate(context, repository, entity, createInput);
            const autoIncrementKey = (0, auto_increment_decorator_1.getAutoIncrementKey)(entityType);
            if (autoIncrementKey !== undefined)
                entity.id = await this.autoIncrement(context, repository, entity.id, autoIncrementKey);
            const responseEntity = await repository.save(entity);
            this.Audit(context, standard_actions_enum_1.StandardActions.Create, entity.id, undefined, responseEntity);
            await eventHandler.afterCreate(context, repository, responseEntity, createInput);
            return responseEntity;
        }
        async autoIncrement(context, repository, primaryKey, autoincrementKey) {
            let val;
            if (typeof (primaryKey) !== "object") {
                val = (await repository.createQueryBuilder("tt").select(`MAX(tt.id)`, "max").getRawOne()).max;
            }
            else {
                delete primaryKey[autoincrementKey];
                val = (await repository.createQueryBuilder("tt").where({ id: primaryKey }).select(`MAX(tt.id.${autoincrementKey})`, "max").getRawOne()).max;
            }
            primaryKey[autoincrementKey] = (val ?? 0) + 1;
            return primaryKey;
        }
        async update(context, id, updateInput, eventHandler = this) {
            const repository = this.getRepository(context);
            const entity = await this.findOne(context, id, true);
            const entityBefore = { ...entity };
            Object.assign(entity, updateInput);
            await eventHandler.beforeUpdate(context, repository, entity, updateInput);
            const responseEntity = await repository.save(entity);
            this.Audit(context, standard_actions_enum_1.StandardActions.Update, entity.id, entityBefore, responseEntity);
            await eventHandler.afterUpdate(context, repository, responseEntity, updateInput);
            return responseEntity;
        }
        async remove(context, id, eventHandler = this) {
            const repository = this.getRepository(context);
            const entity = await this.findOne(context, id, true);
            await eventHandler.beforeRemove(context, repository, entity);
            let responseEntity;
            try {
                responseEntity = await repository.softRemove(entity);
            }
            catch (error) {
                if (error instanceof typeorm_1.MissingDeleteDateColumnError)
                    responseEntity = await repository.remove(entity);
                else
                    throw error;
                responseEntity.id = id;
            }
            await this.Audit(context, standard_actions_enum_1.StandardActions.Remove, entity.id, responseEntity);
            await eventHandler.afterRemove(context, repository, responseEntity);
            return responseEntity;
        }
        async beforeCreate(context, repository, entity, createInput) { }
        async beforeUpdate(context, repository, entity, updateInput) { }
        async beforeRemove(context, repository, entity) { }
        async afterCreate(context, repository, entity, createInput) { }
        async afterUpdate(context, repository, entity, updateInput) { }
        async afterRemove(context, repository, entity) { }
    };
    CrudService = __decorate([
        (0, common_1.Injectable)()
    ], CrudService);
    return (0, common_1.mixin)(CrudService);
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud-service.mixin.js.map