import { FletesService } from '../service/fletes.service';
import { Fletes } from '../entities/fletes.entity';
import { FacturaPorClienteDto } from '../dto/inputs/find-fletes.input';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { FletesWithDocument } from '../dto/model/fletesDcoument.module';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, Fletes, import("../dto/inputs/create-fletes.input").CreateFletesInput, import("../dto/inputs/update-fletes.input").UpdateFletesInput, FletesService, import("../dto/args/find-fletes.args").FindFletesArgs, IContext>;
declare const FletesResolver_base: import("@nestjs/common").Type<{
    readonly service: FletesService;
    create(createInput: import("../dto/inputs/create-fletes.input").CreateFletesInput, context: IContext): Promise<Fletes>;
    update(updateInput: import("../dto/inputs/update-fletes.input").UpdateFletesInput, context: IContext): Promise<Fletes>;
    remove(id: unknown, context: IContext): Promise<Fletes>;
    findOne(id: unknown, context: IContext): Promise<Fletes>;
    findAll(context: IContext, args: any): Promise<Fletes[]>;
    findOneArg(context: IContext, args: any): Promise<Fletes>;
    Count(context: IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class FletesResolver extends FletesResolver_base {
    findAllFacturaCliente(args: FacturaPorClienteDto, context: IContext): Promise<FletesWithDocument[]>;
    findOneFacturaClienteByCode(code: string, context: IContext): Promise<{
        isFound: boolean;
        flete: Fletes;
    }>;
}
export {};
