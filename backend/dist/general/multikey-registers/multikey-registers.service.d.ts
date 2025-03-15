import { CreateMultikeyRegisterInput } from './dto/create-multikey-register.input';
import { UpdateMultikeyRegisterInput } from './dto/update-multikey-register.input';
import { MultikeyRegister } from './entities/multikey-register.entity';
export declare const serviceStructure: import("../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, MultikeyRegister, CreateMultikeyRegisterInput, UpdateMultikeyRegisterInput, import("../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const MultikeyRegistersService_base: import("@nestjs/common").Type<import("../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, MultikeyRegister, CreateMultikeyRegisterInput, UpdateMultikeyRegisterInput, import("../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../patterns/crud-pattern/interfaces/context.interface").IContext>>;
export declare class MultikeyRegistersService extends MultikeyRegistersService_base {
}
export {};
