"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FletesService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const fletes_entity_1 = require("../entities/fletes.entity");
const create_fletes_input_1 = require("../dto/inputs/create-fletes.input");
const update_fletes_input_1 = require("../dto/inputs/update-fletes.input");
const find_fletes_args_1 = require("../dto/args/find-fletes.args");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const typeorm_1 = require("typeorm");
const documentFletes_entity_1 = require("../entities/documentFletes.entity");
const typeorm_2 = require("@nestjs/typeorm");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: fletes_entity_1.Fletes,
    createInputType: create_fletes_input_1.CreateFletesInput,
    updateInputType: update_fletes_input_1.UpdateFletesInput,
    findArgsType: find_fletes_args_1.FindFletesArgs,
});
let FletesService = class FletesService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(httpService, fleteDocumentReposi) {
        super();
        this.httpService = httpService;
        this.fleteDocumentReposi = fleteDocumentReposi;
    }
    async findAllFacturaCliente(context, input) {
        const payload = JSON.stringify({
            "tem_cedula": input.tem_cedula,
            "tem_nomcli": input.tem_nomcli,
            "tem_fecha_desde": input.tem_fecha_desde,
            "tem_fecha_hasta": input.tem_fecha_hasta,
            "tem_numdoc": input.tem_numdoc,
            "tem_vended": input.tem_vended
        });
        const url = process.env.MICROSERVICE_URL + 'some/facturas_por_cliente';
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService
            .post(url, payload, {
            headers,
        }));
        const facturas = response.data;
        const manager = this.getRepository(context).manager;
        for (const factura of facturas) {
            let flete = await manager.findOne(documentFletes_entity_1.FletesDocument, {
                where: { TEM_NUMDOC: factura.TEM_NUMDOC },
            });
            if (!flete) {
                flete = manager.create(documentFletes_entity_1.FletesDocument, {
                    TEM_NUMDOC: factura.TEM_NUMDOC,
                    TEM_NOMCLI: factura.TEM_NOMCLI,
                    TEM_CEDULA: factura.TEM_CEDULA,
                    TEM_FECHA: factura.TEM_FECHA,
                    TEM_TIPMOV: factura.TEM_TIPMOV,
                    TEM_PREFIJ: factura.TEM_PREFIJ,
                    TEM_VENDED: factura.TEM_VENDED,
                    TEM_VENTA: factura.TEM_VENTA,
                    TEM_VALCOS: factura.TEM_VALCOS,
                    TEM_UTILIDAD: factura.TEM_UTILIDAD,
                    TEM_PORCENTAJE_UTILIDAD: factura.TEM_PORCENTAJE_UTILIDAD,
                    CL_DEPART: factura.CL_DEPART,
                    CLI_CIUDAD: factura.CLI_CIUDAD,
                });
            }
            else {
                flete.TEM_NOMCLI = factura.TEM_NOMCLI;
                flete.TEM_CEDULA = factura.TEM_CEDULA;
                flete.TEM_FECHA = factura.TEM_FECHA;
                flete.TEM_TIPMOV = factura.TEM_TIPMOV;
                flete.TEM_PREFIJ = factura.TEM_PREFIJ;
                flete.TEM_VENDED = factura.TEM_VENDED;
                flete.TEM_VENTA = factura.TEM_VENTA;
                flete.TEM_VALCOS = factura.TEM_VALCOS;
                flete.TEM_UTILIDAD = factura.TEM_UTILIDAD;
                flete.TEM_PORCENTAJE_UTILIDAD = factura.TEM_PORCENTAJE_UTILIDAD;
                flete.CL_DEPART = factura.CL_DEPART;
                flete.CLI_CIUDAD = factura.CLI_CIUDAD;
            }
            await manager.save(flete);
        }
        return this.filterFletes(context, input);
    }
    async filterFletes(context, input) {
        const queryBuilder = this.fleteDocumentReposi.createQueryBuilder('t');
        queryBuilder.leftJoin(fletes_entity_1.Fletes, 'td', 'td.numberDocument = t.TEM_NUMDOC');
        queryBuilder.addSelect([
            'td.numberDocument AS "numberDocument"',
            'td.description AS "description"',
            'td.valueFlete AS "valueFlete"',
            'td.oip AS "oip"',
            'td.backComision AS "backComision"',
            'td.numberGuia AS "numberGuia"',
            'td.carrier AS "carrier"',
            'td.carrierCell AS "carrierCell"',
            'td.contactClient AS "contactClient"',
            't.TEM_CEDULA AS "TEM_CEDULA"',
            't.TEM_NOMCLI AS "TEM_NOMCLI"',
            't.TEM_FECHA AS "TEM_FECHA"',
            't.TEM_TIPMOV AS "TEM_TIPMOV"',
            't.TEM_PREFIJ AS "TEM_PREFIJ"',
            't.TEM_NUMDOC AS "TEM_NUMDOC"',
            't.TEM_VENDED AS "TEM_VENDED"',
            't.TEM_VENTA AS "TEM_VENTA"',
            't.TEM_VALCOS AS "TEM_VALCOS"',
            't.TEM_UTILIDAD AS "TEM_UTILIDAD"',
            't.TEM_PORCENTAJE_UTILIDAD AS "TEM_PORCENTAJE_UTILIDAD"',
            't.CL_DEPART AS "CL_DEPART"',
            't.CLI_CIUDAD AS "CLI_CIUDAD"',
        ]);
        if (input.tem_cedula) {
            queryBuilder.andWhere('t.TEM_CEDULA = :cedula', {
                cedula: input.tem_cedula,
            });
        }
        if (input.tem_nomcli) {
            queryBuilder.andWhere('t.TEM_NOMCLI LIKE :clientName', {
                clientName: `%${input.tem_nomcli}%`,
            });
        }
        if (input.tem_numdoc) {
            queryBuilder.andWhere('t.TEM_NUMDOC = :numberDocument', {
                numberDocument: input.tem_numdoc,
            });
        }
        if (input.tem_vended) {
            queryBuilder.andWhere('t.TEM_VENDED = :seller', {
                seller: input.tem_vended,
            });
        }
        if (input.tem_fecha_desde) {
            queryBuilder.andWhere('t.TEM_FECHA >= :fechaDesde', {
                fechaDesde: input.tem_fecha_desde,
            });
        }
        if (input.tem_fecha_hasta) {
            queryBuilder.andWhere('t.TEM_FECHA <= :fechaHasta', {
                fechaHasta: input.tem_fecha_hasta,
            });
        }
        const documentFletes = await queryBuilder.getRawMany();
        return documentFletes;
    }
    async beforeCreate(context, repository, entity, createInput) {
    }
    async findOneByCode(context, code, orFail = false) {
        if (!code)
            throw new Error('Code not send to function');
        const repository = this.getRepository(context);
        const findOne = await repository.findOneBy({
            numberDocument: code
        });
        if (!findOne && orFail)
            throw new Error(`Number invoice ${code} not found to database`);
        return findOne;
    }
};
exports.FletesService = FletesService;
exports.FletesService = FletesService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(documentFletes_entity_1.FletesDocument)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        typeorm_1.Repository])
], FletesService);
//# sourceMappingURL=fletes.service.js.map