import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Queue } from 'bull';
import { CreateNotificationInput } from '../dto/inputs/create-notification.input';
import { UpdateNotificationInput } from '../dto/inputs/update-notification.input';
import { Notification } from '../entities/notification.entity';
import { NotificationGroup } from '../../notification-group/entities/notification-group.entity';
import { EmailService } from '../../../../external-api/certimails/email/service/email.service';
import { SmsService } from '../../../../external-api/certimails/sms/service/sms.service';
import { WssService } from '../../../../external-api/certimails/wss/service/wss.service';
import { UsersService } from '../../../../security/users/services/users.service';
import { IContext } from '../../../../patterns/crud-pattern/interfaces/context.interface';
import { User } from '../../../../security/users/entities/user.entity';
export declare const serviceStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Notification, CreateNotificationInput, UpdateNotificationInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const NotificationService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Notification, CreateNotificationInput, UpdateNotificationInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class NotificationService extends NotificationService_base {
    private readonly notificationQueue;
    private readonly eventEmitter;
    private readonly emailService;
    private readonly smsService;
    private readonly wssService;
    private readonly usersService;
    constructor(notificationQueue: Queue, eventEmitter: EventEmitter2, emailService: EmailService, smsService: SmsService, wssService: WssService, usersService: UsersService);
    beforeCreate(context: IContext, repository: Repository<Notification>, entity: Notification, createInput: CreateNotificationInput): Promise<void>;
    private __buildEmail;
    private __buildSms;
    private __buildWss;
    createNotificationByGroup(context: IContext, users: User[], notificationGroup: NotificationGroup, notificationConfigId: string, metadata: string): Promise<void>;
    createNotification({ context, input }: {
        context: IContext;
        input: CreateNotificationInput;
    }): Promise<any>;
}
export {};
