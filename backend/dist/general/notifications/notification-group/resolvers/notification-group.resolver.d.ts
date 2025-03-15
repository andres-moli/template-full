import { NotificationGroup } from '../entities/notification-group.entity';
import { NotificationGroupService } from '../services/notification-group.service';
declare const NotificationGroupResolver_base: import("@nestjs/common").Type<{
    readonly service: NotificationGroupService;
    create(createInput: import("../dto/inputs/create-notification-group.input").CreateNotificationGroupInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationGroup>;
    update(updateInput: import("../dto/inputs/update-notification-group.input").UpdateNotificationGroupInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationGroup>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationGroup>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationGroup>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<NotificationGroup[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<NotificationGroup>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class NotificationGroupResolver extends NotificationGroupResolver_base {
}
export {};
