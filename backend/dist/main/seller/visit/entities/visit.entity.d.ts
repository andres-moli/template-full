import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { User } from 'src/security/users/entities/user.entity';
import { StatusVisitEnum } from '../emun/visit.emun';
import { VisitComent } from '../../visit-coment/entities/visit-coment.entity';
export declare class Visit extends CrudEntity {
    description: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    mocked?: boolean;
    dateVisit: Date;
    status: StatusVisitEnum;
    visitItem: VisitComent[];
    user: User;
}
