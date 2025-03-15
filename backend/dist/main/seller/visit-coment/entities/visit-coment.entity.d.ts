import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { User } from 'src/security/users/entities/user.entity';
import { VisitComentTypeEnum } from '../emun/visit-coment.emun';
import { Visit } from '../../visit/entities/visit.entity';
import { FileInfo } from 'src/general/files/entities/file-info.entity';
export declare class VisitComent extends CrudEntity {
    description: string;
    type: VisitComentTypeEnum;
    location?: string;
    latitude?: string;
    longitude?: string;
    dateFull?: Date;
    date?: Date;
    time?: Date;
    mocked?: boolean;
    getFormattedTime(): string | null;
    file?: FileInfo;
    visit: Visit;
    user: User;
}
