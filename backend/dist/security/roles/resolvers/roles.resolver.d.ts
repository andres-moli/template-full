import { RolesService } from '../services/roles.service';
import { Role } from '../entities/role.entity';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
declare const RolesResolver_base: import("@nestjs/common").Type<{
    readonly service: RolesService;
    create(createInput: import("../dto/create-role.input").CreateRoleInput, context: IContext): Promise<Role>;
    update(updateInput: import("../dto/update-role.input").UpdateRoleInput, context: IContext): Promise<Role>;
    remove(id: unknown, context: IContext): Promise<Role>;
    findOne(id: unknown, context: IContext): Promise<Role>;
    findAll(context: IContext, args: any): Promise<Role[]>;
    findOneArg(context: IContext, args: any): Promise<Role>;
    Count(context: IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class RolesResolver extends RolesResolver_base {
    createDefaultRoles(context: IContext): Promise<Role[]>;
}
export {};
