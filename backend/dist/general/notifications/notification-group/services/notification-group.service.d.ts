import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateNotificationGroupInput } from '../dto/inputs/create-notification-group.input';
import { UpdateNotificationGroupInput } from '../dto/inputs/update-notification-group.input';
import { NotificationGroup } from '../entities/notification-group.entity';
import { Repository } from 'typeorm';
import { NotificationConfigService } from '../../notification-config/services/notification-config.service';
import { NotificationService } from '../../notification/services/notification.service';
import { SuscriptionService } from '../../../suscriptions/services/suscription.service';
import { IContext } from '../../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, NotificationGroup, CreateNotificationGroupInput, UpdateNotificationGroupInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const NotificationGroupService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, NotificationGroup, CreateNotificationGroupInput, UpdateNotificationGroupInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class NotificationGroupService extends NotificationGroupService_base {
    private readonly eventEmitter;
    private readonly notificationConfigService;
    private readonly notificationService;
    private readonly suscriptionService;
    constructor(eventEmitter: EventEmitter2, notificationConfigService: NotificationConfigService, notificationService: NotificationService, suscriptionService: SuscriptionService);
    afterCreate(context: IContext, repository: Repository<NotificationGroup>, entity: NotificationGroup, createInput: CreateNotificationGroupInput): Promise<void>;
    fillGroup(context: IContext, entity: NotificationGroup, createInput: CreateNotificationGroupInput): Promise<void>;
    findOneById({ context, input }: {
        context: IContext;
        input: string;
    }): Promise<NotificationGroup>;
}
export {};
