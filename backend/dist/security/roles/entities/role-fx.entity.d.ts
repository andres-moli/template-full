import { Role } from './role.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
export declare class RoleFx extends CrudEntity {
    permission: string;
    role?: Role;
}
