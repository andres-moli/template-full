import { StateNotificationGroup } from '../enums/state-notification-group.enum';
import { NotificationConfig } from '../../notification-config/entities/notification-config.entity';
import { TypeNotificationGroup } from '../enums/type-notification-group.enum';
import { CrudEntity } from '../../../../patterns/crud-pattern/entities/crud-entity';
import { Group } from '../../../../security/groups/entities/groups.entity';
export declare class NotificationGroup extends CrudEntity {
    name: string;
    typeNotificationGroup: TypeNotificationGroup;
    stateNotificationGroup: StateNotificationGroup;
    notificationConfig: NotificationConfig;
    group: Group;
}
