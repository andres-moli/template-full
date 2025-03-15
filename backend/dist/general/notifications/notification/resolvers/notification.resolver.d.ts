import { Notification } from '../entities/notification.entity';
import { NotificationService } from '../services/notification.service';
declare const NotificationResolver_base: import("@nestjs/common").Type<{
    readonly service: NotificationService;
    create(createInput: import("../dto/inputs/create-notification.input").CreateNotificationInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Notification>;
    update(updateInput: import("../dto/inputs/update-notification.input").UpdateNotificationInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Notification>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Notification>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Notification>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Notification[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Notification>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class NotificationResolver extends NotificationResolver_base {
}
export {};
