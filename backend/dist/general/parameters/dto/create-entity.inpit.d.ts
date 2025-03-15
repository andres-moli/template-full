import { TypeParameterEnum } from "../emun/type-parameter.enum";
export declare class CreateParametersInput {
    name: string;
    codigo: string;
    descripcion: string;
    type: TypeParameterEnum;
    valueInt?: number;
    valueString?: string;
    valueDate?: Date;
    valueFileId?: string;
}
