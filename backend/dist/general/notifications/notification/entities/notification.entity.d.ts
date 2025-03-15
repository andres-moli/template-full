import { StatePersistent } from '../enums/state-persistent.enum';
import { StateNotification } from '../enums/state-notification.enum';
import { TypeNotification } from '../enums/type-notificartion.enum';
import { NotificationConfig } from '../../notification-config/entities/notification-config.entity';
import { NotificationGroup } from '../../notification-group/entities/notification-group.entity';
import { User } from '../../../../security/users/entities/user.entity';
import { CrudEntity } from '../../../../patterns/crud-pattern/entities/crud-entity';
export declare class Notification extends CrudEntity {
    type: TypeNotification;
    user?: User;
    metadata?: string;
    hasPersistent: boolean;
    persistentExpiration?: Date;
    statePersistent?: StatePersistent;
    stateNotification: StateNotification;
    notificationConfig: NotificationConfig;
    notificationGroup?: NotificationGroup;
    externalId?: string;
    externalMessage?: string;
}
