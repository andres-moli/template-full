import { RoleFx } from './role-fx.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { UserTypes } from '../../users/enums/user-type.enum';
import { User } from '../../users/entities/user.entity';
export declare class Role extends CrudEntity {
    name: string;
    description: string;
    defaultForType: UserTypes;
    users: User[];
    roleFx: RoleFx[];
}
