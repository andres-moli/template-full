import { RoleFx } from '../entities/role-fx.entity';
import { CreateAndRemoveRoleFxInput } from '../dto/create-and-remove-role-fx.input';
import { UpdateRoleFxInput } from '../dto/update-role-fx.input';
import { Role } from '../entities/role.entity';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, RoleFx, CreateAndRemoveRoleFxInput, UpdateRoleFxInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const RolesFxService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, RoleFx, CreateAndRemoveRoleFxInput, UpdateRoleFxInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class RolesFxService extends RolesFxService_base {
    createNewRolesFx(permissions: any, repository: any, role: Role): Promise<any[]>;
    createRoleFx(context: IContext, createRoleFxInput: CreateAndRemoveRoleFxInput): Promise<RoleFx[]>;
    removeRoleFx(context: IContext, createRoleFxInput: CreateAndRemoveRoleFxInput): Promise<string[]>;
    replaceAllRolesFx(context: IContext, replaceAllFxInput: CreateAndRemoveRoleFxInput): Promise<RoleFx[]>;
}
export {};
