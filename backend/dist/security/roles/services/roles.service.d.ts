import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';
import { Role } from '../entities/role.entity';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Role, CreateRoleInput, UpdateRoleInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const RolesService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Role, CreateRoleInput, UpdateRoleInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class RolesService extends RolesService_base {
    findOneById(context: IContext, id: string, orFail?: boolean): Promise<Role>;
    createDefaultRoles(context: IContext): Promise<Role[]>;
    onValidateRole({ context, roleId, orFail }: {
        context: IContext;
        roleId: string;
        orFail: boolean;
    }): Promise<Role>;
}
export {};
