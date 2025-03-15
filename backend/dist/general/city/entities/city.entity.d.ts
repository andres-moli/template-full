import { CrudEntity } from "../../../patterns/crud-pattern/entities/crud-entity";
import { Department } from "../../department/entities/departament.entity";
import { User } from "../../../security/users/entities/user.entity";
export declare class City extends CrudEntity {
    code: number;
    name: string;
    department: Department;
    user: User[];
}
