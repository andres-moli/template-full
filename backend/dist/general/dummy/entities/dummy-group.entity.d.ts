import { DummyFamily } from './dummy-family.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
export declare class DummyGroup extends CrudEntity {
    name: string;
    title: string;
    family?: DummyFamily;
}
