import { CrudEntity } from "../../../patterns/crud-pattern/entities/crud-entity";
import { FileInfo } from "src/general/files/entities/file-info.entity";
import { TypeParameterEnum } from "../emun/type-parameter.enum";
export declare class Parameter extends CrudEntity {
    name: string;
    codigo: string;
    descripcion: string;
    type: TypeParameterEnum;
    valueInt?: number;
    valueString?: string;
    valueDate?: Date;
    valueFile?: FileInfo;
}
