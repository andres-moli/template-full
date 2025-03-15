import { Dummy } from './dummy.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
export declare class DummyItem extends CrudEntity {
    firstField: string;
    secondField: Date;
    thirdField: number;
    fourthField: number;
    dummy: Dummy;
}
