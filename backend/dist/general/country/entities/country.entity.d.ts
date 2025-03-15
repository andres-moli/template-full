import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { User } from '../../../security/users/entities/user.entity';
export declare class Country extends CrudEntity {
    code: number;
    name: string;
    user: User[];
}
