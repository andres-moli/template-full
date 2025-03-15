import { NotificationConfig } from '../entities/notification-config.entity';
import { NotificationConfigService } from '../services/notification-config.service';
declare const NotificationConfigResolver_base: import("@nestjs/common").Type<{
    readonly service: NotificationConfigService;
    create(createInput: import("../dto/inputs/create-notification-config.input").CreateNotificationConfigInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationConfig>;
    update(updateInput: import("../dto/inputs/update-notification-config.input").UpdateNotificationConfigInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationConfig>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationConfig>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<NotificationConfig>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<NotificationConfig[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<NotificationConfig>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class NotificationConfigResolver extends NotificationConfigResolver_base {
}
export {};
