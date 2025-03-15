import { DummyService } from '../services/dummy.service';
import { Dummy } from '../entities/dummy.entity';
import { I18nContext } from 'nestjs-i18n';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare const resolverStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, Dummy, import("../dto/inputs/create-dummy.input").CreateDummyInput, import("../dto/inputs/update-dummy.input").UpdateDummyInput, DummyService, import("../dto/args/find-dummies.args").FindDummiesArgs, IContext>;
declare const DummyResolver_base: import("@nestjs/common").Type<{
    readonly service: DummyService;
    create(createInput: import("../dto/inputs/create-dummy.input").CreateDummyInput, context: IContext): Promise<Dummy>;
    update(updateInput: import("../dto/inputs/update-dummy.input").UpdateDummyInput, context: IContext): Promise<Dummy>;
    remove(id: unknown, context: IContext): Promise<Dummy>;
    findOne(id: unknown, context: IContext): Promise<Dummy>;
    findAll(context: IContext, args: any): Promise<Dummy[]>;
    findOneArg(context: IContext, args: any): Promise<Dummy>;
    Count(context: IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class DummyResolver extends DummyResolver_base {
    createBatch(context: IContext): Promise<Dummy[]>;
    i18nTest(i18n: I18nContext): Promise<string>;
}
export {};
