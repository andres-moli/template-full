import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { User } from './user.entity';
export declare class UserKey extends CrudEntity {
    code: string;
    expirationCode: string;
    origin: string;
    user: User;
}
