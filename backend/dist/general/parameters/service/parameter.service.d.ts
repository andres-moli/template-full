import { Parameter } from "../entities/parameter.entity";
import { CreateParametersInput } from "../dto/create-entity.inpit";
import { UpdateParametersInput } from "../dto/update-entity.input";
import { IContext } from "src/patterns/crud-pattern/interfaces/context.interface";
import { Repository } from "typeorm";
import { FilesService } from "src/general/files/services/files.service";
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Parameter, CreateParametersInput, UpdateParametersInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const ParameterService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Parameter, CreateParametersInput, UpdateParametersInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class ParameterService extends ParameterService_base {
    private readonly filesService;
    constructor(filesService: FilesService);
    beforeCreate(context: IContext, repository: Repository<Parameter>, entity: Parameter, createInput: CreateParametersInput): Promise<void>;
    findOneCodigo(context: IContext, codigo: string, orFaile?: boolean): Promise<string | number | import("../../files/entities/file-info.entity").FileInfo | Date>;
}
export {};
