import { IDataEntity } from "../interfaces/data-entity.interface";
export declare abstract class CrudEntity implements IDataEntity<string> {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
