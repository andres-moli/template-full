import { Fletes } from '../../entities/fletes.entity';
export declare class FacturaResponseModel {
    TEM_CEDULA: string;
    TEM_NOMCLI: string;
    TEM_FECHA: string;
    TEM_TIPMOV: string;
    TEM_PREFIJ: string;
    TEM_NUMDOC: string;
    TEM_VENDED: string;
    TEM_VENTA: string;
    TEM_VALCOS: string;
    TEM_UTILIDAD: string;
    TEM_PORCENTAJE_UTILIDAD: string;
    CL_DEPART: string;
    CLI_CIUDAD: string;
}
export declare class findOneFacturaClienteByCode {
    isFound: boolean;
    flete?: Fletes;
}
