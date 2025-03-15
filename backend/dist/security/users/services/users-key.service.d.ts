import { FindUserArgs } from '../dto/args/find-users.args';
import { UserKey } from '../entities/user-key.entity';
import { CreateUserKeyInput } from '../dto/inputs/create-user-key.input';
import { UpdateUserKeyInput } from '../dto/inputs/update-user-key.input';
import { User } from '../entities/user.entity';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, UserKey, CreateUserKeyInput, UpdateUserKeyInput, FindUserArgs, IContext>;
declare const UsersKeyService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, UserKey, CreateUserKeyInput, UpdateUserKeyInput, FindUserArgs, IContext>>;
export declare class UsersKeyService extends UsersKeyService_base {
    registerCode(context: IContext, code: string, user: User, origin: string): Promise<boolean>;
    checkCode(context: IContext, code: string, user: User, origin: string): Promise<boolean>;
    onRegisterCode({ context, code, user, origin }: {
        context: IContext;
        code: string;
        user: User;
        origin: string;
    }): Promise<boolean>;
    onCheckCode({ context, code, user, origin }: {
        context: IContext;
        code: string;
        user: User;
        origin: string;
    }): Promise<boolean>;
}
export {};
