import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
export declare class Fletes extends CrudEntity {
    numberDocument: string;
    description: string;
    valueFlete: number;
    oip: number;
    backComision: number;
    numberGuia: string;
    carrier: string;
    carrierCell: string;
    contactClient: string;
}
