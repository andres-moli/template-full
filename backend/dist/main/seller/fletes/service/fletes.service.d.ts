import { Fletes } from '../entities/fletes.entity';
import { CreateFletesInput } from '../dto/inputs/create-fletes.input';
import { UpdateFletesInput } from '../dto/inputs/update-fletes.input';
import { FindFletesArgs } from '../dto/args/find-fletes.args';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { FacturaPorClienteDto } from '../dto/inputs/find-fletes.input';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { FletesDocument } from '../entities/documentFletes.entity';
import { FletesWithDocument } from '../dto/model/fletesDcoument.module';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Fletes, CreateFletesInput, UpdateFletesInput, FindFletesArgs, IContext>;
declare const FletesService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Fletes, CreateFletesInput, UpdateFletesInput, FindFletesArgs, IContext>>;
export declare class FletesService extends FletesService_base {
    private readonly httpService;
    private readonly fleteDocumentReposi;
    constructor(httpService: HttpService, fleteDocumentReposi: Repository<FletesDocument>);
    findAllFacturaCliente(context: IContext, input: FacturaPorClienteDto): Promise<FletesWithDocument[]>;
    filterFletes(context: IContext, input: {
        tem_cedula?: string;
        tem_nomcli?: string;
        tem_fecha_desde?: string;
        tem_fecha_hasta?: string;
        tem_numdoc?: string;
        tem_vended?: string;
    }): Promise<FletesWithDocument[]>;
    beforeCreate(context: IContext, repository: Repository<Fletes>, entity: Fletes, createInput: CreateFletesInput): Promise<void>;
    findOneByCode(context: IContext, code: string, orFail?: boolean): Promise<Fletes>;
}
export {};
