import { VisitTypeService } from '../service/visit-type.service';
import { VisitType } from '../entities/visit-type.entity';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, VisitType, import("../dto/inputs/create-visit-type.input").CreateVisitTypeInput, import("../dto/inputs/update-visit-type.input").UpdateVisitTypeInput, VisitTypeService, import("../dto/args/find-visit-type.args").FindVisitTypeArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const VisitTypeResolver_base: import("@nestjs/common").Type<{
    readonly service: VisitTypeService;
    create(createInput: import("../dto/inputs/create-visit-type.input").CreateVisitTypeInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitType>;
    update(updateInput: import("../dto/inputs/update-visit-type.input").UpdateVisitTypeInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitType>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitType>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitType>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<VisitType[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<VisitType>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class VisitTypeResolver extends VisitTypeResolver_base {
}
export {};
