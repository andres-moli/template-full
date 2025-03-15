import { MultikeyRegistersService } from './multikey-registers.service';
import { MultikeyRegister } from './entities/multikey-register.entity';
import { MultikeyRegisterId } from './entities/multikey-register.identifier';
export declare const resolverStructure: import("../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<MultikeyRegisterId, MultikeyRegister, import("./dto/create-multikey-register.input").CreateMultikeyRegisterInput, import("./dto/update-multikey-register.input").UpdateMultikeyRegisterInput, MultikeyRegistersService, import("../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const MultikeyRegistersResolver_base: import("@nestjs/common").Type<{
    readonly service: MultikeyRegistersService;
    create(createInput: import("./dto/create-multikey-register.input").CreateMultikeyRegisterInput, context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<MultikeyRegister>;
    update(updateInput: import("./dto/update-multikey-register.input").UpdateMultikeyRegisterInput, context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<MultikeyRegister>;
    remove(id: MultikeyRegisterId, context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<MultikeyRegister>;
    findOne(id: MultikeyRegisterId, context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<MultikeyRegister>;
    findAll(context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<MultikeyRegister[]>;
    findOneArg(context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<MultikeyRegister>;
    Count(context: import("../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class MultikeyRegistersResolver extends MultikeyRegistersResolver_base {
}
export {};
