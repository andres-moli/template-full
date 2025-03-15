import { CrudEntity } from "../../../patterns/crud-pattern/entities/crud-entity";
import { User } from "../../../security/users/entities/user.entity";
import { Country } from "../../country/entities/country.entity";
export declare class Department extends CrudEntity {
    code: number;
    name: string;
    country: Country;
    user: User[];
}
