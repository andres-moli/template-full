import { UsersKeyService } from '../services/users-key.service';
import { UserKey } from '../entities/user-key.entity';
declare const UserKeyResolver_base: import("@nestjs/common").Type<{
    readonly service: UsersKeyService;
    create(createInput: import("../dto/inputs/create-user-key.input").CreateUserKeyInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<UserKey>;
    update(updateInput: import("../dto/inputs/update-user-key.input").UpdateUserKeyInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<UserKey>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<UserKey>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<UserKey>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<UserKey[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<UserKey>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class UserKeyResolver extends UserKeyResolver_base {
}
export {};
