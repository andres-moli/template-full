import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { VisitTypeStatusEnum } from '../emun/visit-type.enum';
export declare class VisitType extends CrudEntity {
    name: string;
    description: string;
    status: VisitTypeStatusEnum;
}
