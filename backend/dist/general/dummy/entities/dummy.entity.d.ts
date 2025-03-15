import { DummyItem } from './dummy-item.entity';
import { DummyType } from './dummy-type.entity';
import { DummyGroup } from './dummy-group.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { Notification } from '../../notifications/notification/entities/notification.entity';
export declare class Dummy extends CrudEntity {
    firstField: string;
    secondField: Date;
    thirdField: number;
    email?: string;
    phone?: string;
    notification?: Notification;
    items: DummyItem[];
    type?: DummyType;
    group?: DummyGroup;
}
