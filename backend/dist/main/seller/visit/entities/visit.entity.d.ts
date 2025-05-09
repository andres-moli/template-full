import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { User } from 'src/security/users/entities/user.entity';
import { StatusVisitEnum } from '../emun/visit.emun';
import { VisitType } from '../../visit-type/entities/visit-type.entity';
import { VisitComent } from '../../visit-coment/entities/visit-coment.entity';
import { VisitToolUnit } from '../../tools/tool-visit/entities/visit-tool-unit.entity';
export declare class Visit extends CrudEntity {
    description: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    mocked?: boolean;
    dateVisit: Date;
    status: StatusVisitEnum;
    toolUnitsUsed: VisitToolUnit[];
    type?: VisitType;
    visitItem: VisitComent[];
    user: User;
}
