import { Position } from "../entities/position.entity";
import { CreatePositionInput } from "../dto/create-entity.inpit";
import { UpdatePositionInput } from "../dto/update-entity.input";
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Position, CreatePositionInput, UpdatePositionInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const PositionService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Position, CreatePositionInput, UpdatePositionInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>>;
export declare class PositionService extends PositionService_base {
}
export {};
