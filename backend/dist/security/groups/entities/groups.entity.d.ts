import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { NotificationConfig } from '../../../general/notifications/notification-config/entities/notification-config.entity';
import { User } from '../../users/entities/user.entity';
export declare class Group extends CrudEntity {
    name: string;
    notificationConfig?: NotificationConfig;
    users?: User[];
}
