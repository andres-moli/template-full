import { Parameter } from "../entities/parameter.entity";
import { ParameterService } from "../service/parameter.service";
declare const ParameterResolver_base: import("@nestjs/common").Type<{
    readonly service: ParameterService;
    create(createInput: import("../dto/create-entity.inpit").CreateParametersInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Parameter>;
    update(updateInput: import("../dto/update-entity.input").UpdateParametersInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Parameter>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Parameter>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Parameter>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Parameter[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Parameter>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class ParameterResolver extends ParameterResolver_base {
}
export {};
