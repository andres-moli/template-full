import { Constructable } from "../types/constructable.type";
import { Pagination } from "../classes/inputs/pagination.input";
export declare const WHERE_CLASS_KEY = "WhereClass";
export declare const ORDER_BY_CLASS_KEY = "OrderByClass";
export declare function FindArgs<WhereStructureType extends Constructable = Constructable, OrderByStructureType extends Constructable = Constructable>(whereStructureType?: WhereStructureType, orderByStructureType?: OrderByStructureType): import("@nestjs/common").Type<{
    pagination?: Pagination;
}>;
export declare function getWhereClass(findArgsType: any): any;
export declare function getOrderByClass(findArgsType: any): any;
