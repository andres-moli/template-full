import { Repository } from 'typeorm';
import { CreateGroupInput } from '../dto/inputs/create-groups.input';
import { UpdateGroupInput } from '../dto/inputs/update-groups.input';
import { Group } from '../entities/groups.entity';
import { NotificationConfigService } from '../../../general/notifications/notification-config/services/notification-config.service';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Group, CreateGroupInput, UpdateGroupInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const GroupsService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Group, CreateGroupInput, UpdateGroupInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class GroupsService extends GroupsService_base {
    private readonly notificationConfigService;
    constructor(notificationConfigService: NotificationConfigService);
    beforeCreate(context: IContext, repository: Repository<Group>, entity: Group, createInput: CreateGroupInput): Promise<void>;
    beforeUpdate(context: IContext, repository: Repository<Group>, entity: Group, updateInput: UpdateGroupInput): Promise<void>;
    findOneById({ context, input }: {
        context: IContext;
        input: string;
    }): Promise<Group>;
    findByNotification({ context, input }: {
        context: IContext;
        input: string;
    }): Promise<Group[]>;
}
export {};
