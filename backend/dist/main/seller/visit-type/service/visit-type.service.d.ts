import { VisitType } from '../entities/visit-type.entity';
import { CreateVisitTypeInput } from '../dto/inputs/create-visit-type.input';
import { UpdateVisitTypeInput } from '../dto/inputs/update-visit-type.input';
import { FindVisitTypeArgs } from '../dto/args/find-visit-type.args';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, VisitType, CreateVisitTypeInput, UpdateVisitTypeInput, FindVisitTypeArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const VisitTypeService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, VisitType, CreateVisitTypeInput, UpdateVisitTypeInput, FindVisitTypeArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>>;
export declare class VisitTypeService extends VisitTypeService_base {
    constructor();
}
export {};
