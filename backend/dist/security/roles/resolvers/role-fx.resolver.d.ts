import { RolesFxService } from '../services/roles-fx.service';
import { RoleFx } from '../entities/role-fx.entity';
import { CreateAndRemoveRoleFxInput } from '../dto/create-and-remove-role-fx.input';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
declare const RoleFxResolver_base: import("@nestjs/common").Type<{
    readonly service: RolesFxService;
    create(createInput: CreateAndRemoveRoleFxInput, context: IContext): Promise<RoleFx>;
    update(updateInput: import("../dto/update-role-fx.input").UpdateRoleFxInput, context: IContext): Promise<RoleFx>;
    remove(id: unknown, context: IContext): Promise<RoleFx>;
    findOne(id: unknown, context: IContext): Promise<RoleFx>;
    findAll(context: IContext, args: any): Promise<RoleFx[]>;
    findOneArg(context: IContext, args: any): Promise<RoleFx>;
    Count(context: IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class RoleFxResolver extends RoleFxResolver_base {
    createRoleFx(context: IContext, createRoleFxInput: CreateAndRemoveRoleFxInput): Promise<RoleFx[]>;
    removeRoleFx(context: IContext, removeRoleFxInput: CreateAndRemoveRoleFxInput): Promise<string[]>;
    replaceAllRolesFx(context: IContext, replaceAllRoleFxInput: CreateAndRemoveRoleFxInput): Promise<RoleFx[]>;
}
export {};
