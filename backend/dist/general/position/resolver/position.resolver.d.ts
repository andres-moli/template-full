import { Position } from "../entities/position.entity";
import { PositionService } from "../service/position.service";
declare const PositionResolver_base: import("@nestjs/common").Type<{
    readonly service: PositionService;
    create(createInput: import("../dto/create-entity.inpit").CreatePositionInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Position>;
    update(updateInput: import("../dto/update-entity.input").UpdatePositionInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Position>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Position>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Position>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Position[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Position>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class PositionResolver extends PositionResolver_base {
}
export {};
