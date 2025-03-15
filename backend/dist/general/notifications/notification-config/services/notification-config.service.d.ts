import { CreateNotificationConfigInput } from '../dto/inputs/create-notification-config.input';
import { UpdateNotificationConfigInput } from '../dto/inputs/update-notification-config.input';
import { NotificationConfig } from '../entities/notification-config.entity';
import { Repository } from 'typeorm';
import { NotificationTypes } from '../enums/notification-type.enum';
import { ProfileService } from '../../../../external-api/certimails/profile/services/profile.service';
import { IContext } from '../../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, NotificationConfig, CreateNotificationConfigInput, UpdateNotificationConfigInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const NotificationConfigService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, NotificationConfig, CreateNotificationConfigInput, UpdateNotificationConfigInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class NotificationConfigService extends NotificationConfigService_base {
    private readonly profileService;
    constructor(profileService: ProfileService);
    beforeCreate(context: IContext, repository: Repository<NotificationConfig>, entity: NotificationConfig, createInput: CreateNotificationConfigInput): Promise<void>;
    beforeUpdate(context: IContext, repository: Repository<NotificationConfig>, entity: NotificationConfig, updateInput: UpdateNotificationConfigInput): Promise<void>;
    private __validateMutation;
    findOneByType({ context, type, subtype, orFail }: {
        context: IContext;
        type: NotificationTypes;
        subtype: string;
        orFail?: boolean;
    }): Promise<NotificationConfig>;
    findOneById({ context, input }: {
        context: IContext;
        input: string;
    }): Promise<NotificationConfig>;
}
export {};
