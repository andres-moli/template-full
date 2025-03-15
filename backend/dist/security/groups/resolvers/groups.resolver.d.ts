import { Group } from '../entities/groups.entity';
import { GroupsService } from '../services/groups.service';
declare const GroupsResolver_base: import("@nestjs/common").Type<{
    readonly service: GroupsService;
    create(createInput: import("../dto/inputs/create-groups.input").CreateGroupInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Group>;
    update(updateInput: import("../dto/inputs/update-groups.input").UpdateGroupInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Group>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Group>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Group>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Group[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Group>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class GroupsResolver extends GroupsResolver_base {
}
export {};
