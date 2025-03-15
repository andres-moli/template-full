import { CrudEntity } from "../../../patterns/crud-pattern/entities/crud-entity";
import { RouterType } from "../enum/router-type.enum";
export declare class PageLink extends CrudEntity {
    routeType?: RouterType;
    target?: string;
    arguments?: string[];
    url?: string;
}
