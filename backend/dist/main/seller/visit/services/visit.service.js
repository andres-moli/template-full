"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const visit_entity_1 = require("../entities/visit.entity");
const create_visit_input_1 = require("../dto/inputs/create-visit.input");
const update_visit_input_1 = require("../dto/inputs/update-visit.input");
const find_visit_args_1 = require("../dto/args/find-visit.args");
const client_service_1 = require("../../client/services/client.service");
const users_service_1 = require("../../../../security/users/services/users.service");
const parameter_service_1 = require("../../../../general/parameters/service/parameter.service");
const visit_emun_1 = require("../emun/visit.emun");
const moment_1 = __importDefault(require("moment"));
const visit_type_service_1 = require("../../visit-type/service/visit-type.service");
const email_service_1 = require("../../../../general/email/service/email.service");
const ExcelJS = __importStar(require("exceljs"));
const index_sql_1 = require("../sql/index.sql");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const visit_coment_service_1 = require("../../visit-coment/services/visit-coment.service");
const visit_coment_emun_1 = require("../../visit-coment/emun/visit-coment.emun");
const visit_coment_entity_1 = require("../../visit-coment/entities/visit-coment.entity");
const tool_visit_service_1 = require("../../tools/tool-visit/service/tool-visit-service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: visit_entity_1.Visit,
    createInputType: create_visit_input_1.CreateVisitInput,
    updateInputType: update_visit_input_1.UpdateVisitInput,
    findArgsType: find_visit_args_1.FindVisitArgs,
});
let VisitService = class VisitService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(clientService, usersService, parameterService, visitTypeService, mailService, httpService, visitComentService, visitToolVisittService) {
        super();
        this.clientService = clientService;
        this.usersService = usersService;
        this.parameterService = parameterService;
        this.visitTypeService = visitTypeService;
        this.mailService = mailService;
        this.httpService = httpService;
        this.visitComentService = visitComentService;
        this.visitToolVisittService = visitToolVisittService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        if (await this.findActivityNowUser(context, createInput.userId)) {
            throw new Error('Ya existe una actividad en proceso');
        }
        entity.status = visit_emun_1.StatusVisitEnum.initiated;
        entity.user = await this.usersService.findOne(context, createInput.userId, true);
        entity.dateVisit = createInput.dateVisit;
        entity.type = await this.visitTypeService.findOne(context, createInput.typeId);
    }
    async beforeUpdate(context, repository, entity, updateInput) {
        if (updateInput.status === entity.status) {
            throw new Error(`La actividad ya se encuentra en el estado que estas intentando cambiar [${updateInput.status}]`);
        }
    }
    async calculateTotalHours(visit) {
        const manager = this.getRepository({ user: undefined }).manager;
        const startComent = await manager.findOne(visit_coment_entity_1.VisitComent, {
            where: {
                visit: {
                    id: visit.id
                },
                type: visit_coment_emun_1.VisitComentTypeEnum.INICIO
            },
        });
        const endComent = await manager.findOne(visit_coment_entity_1.VisitComent, {
            where: {
                visit: {
                    id: visit.id
                },
                type: visit_coment_emun_1.VisitComentTypeEnum.FIN
            },
        });
        if (!startComent || !endComent) {
            return 0;
        }
        const startTime = (0, moment_1.default)(startComent.dateFull);
        const endTime = (0, moment_1.default)(endComent.dateFull);
        const durationInMinutes = endTime.diff(startTime, 'minutes');
        const durationInHours = Math.round((durationInMinutes / 60) * 10) / 10;
        return durationInMinutes;
    }
    async getVisitWithTotalHours(userId) {
        const visit = await this.getRepository({ user: undefined }).find({
            where: {
                user: {
                    id: userId
                }
            },
            relations: ['visitItem'],
        });
        if (visit) {
        }
        return 0;
    }
    async afterCreate(context, repository, entity, createInput) {
        if (Array.isArray(createInput.tools)) {
            for (const tool of createInput.tools) {
                this.visitToolVisittService.create(context, {
                    toolUnitId: tool.toolUnitId,
                    visitId: entity.id,
                    photoUrls: tool.photoUrls,
                    usageDate: new Date(),
                });
            }
        }
        const comment = await this.visitComentService.create(context, {
            type: visit_coment_emun_1.VisitComentTypeEnum.INICIO,
            visitId: entity.id,
            description: entity.description,
            date: entity.dateVisit,
            status: visit_coment_emun_1.VisitComentStatusEnum.REALIZED,
            latitude: entity.latitude,
            longitude: entity.longitude,
            dateFull: entity.dateVisit,
            time: entity.dateVisit,
            mocked: entity.mocked,
            fileId: createInput.fileId || undefined
        });
        if (entity.mocked) {
            this.sendMailMockedFail(context, comment);
        }
    }
    async finishVisit(context, updateInput) {
        const repository = this.getRepository(context);
        const entity = await this.findOne(context, updateInput.id, true);
        entity.status = visit_emun_1.StatusVisitEnum.realized;
        const responseEntity = await repository.save(entity);
        const comment = await this.visitComentService.create(context, {
            type: visit_coment_emun_1.VisitComentTypeEnum.FIN,
            visitId: entity.id,
            description: updateInput.description,
            date: updateInput.dateVisit,
            status: visit_coment_emun_1.VisitComentStatusEnum.REALIZED,
            latitude: updateInput.latitude,
            longitude: updateInput.longitude,
            dateFull: (0, moment_1.default)((0, moment_1.default)(updateInput.dateVisit).format('YYYY-MM-DD HH:mm')).local().toDate(),
            time: updateInput.dateVisit,
            mocked: updateInput.mocked,
            fileId: updateInput.fileId || undefined
        });
        if (updateInput.mocked) {
            this.sendMailMockedFail(context, comment);
        }
        return responseEntity;
    }
    async sendWhastapp(number, entity) {
        try {
            const url = "http://intranet.cytech.net.co:3003/send-message";
            const headers = {
                'Content-Type': 'application/json',
            };
            const status = entity.status == visit_emun_1.StatusVisitEnum.confirmed ? 'CONFIRMADA' : 'CANCELADA';
            const payload = {
                number: "57" + number,
                message: `Hola ${(await entity.user).name}, su visita para el dia [${(0, moment_1.default)(entity.dateVisit).format('YYYY-MM-DD HH:mm:ss')}] con el cliente , fue  ${status}`
            };
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, payload, { headers }));
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async sendWhastappAdmin(entity, urlAcept, urlRechazar) {
        try {
            const url = "http://intranet.cytech.net.co:3003/send-message";
            const headers = {
                'Content-Type': 'application/json',
            };
            const status = entity.status == visit_emun_1.StatusVisitEnum.confirmed ? 'CONFIRMADA' : 'CANCELADA';
            const payload = {
                number: "57" + "3176578598",
                message: `
        El trabajador ${(await entity.user).name}, creo una  visita para el dia [${(0, moment_1.default)(entity.dateVisit).format('YYYY-MM-DD HH:mm:ss')}] con el cliente, por favor revisar
        \n\n
        Click aquí para aceptar --> [${urlAcept}] \n\n
        Click aquí para rechazar --> [${urlRechazar}] \n\n
        `
            };
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, payload, { headers }));
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async sendMailAdmin(context, visit) {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9c';
        const emailUserConfirm = await this.parameterService.findOneCodigo(context, 'EMAIL-CONFIRM-VISIT', true);
        if (typeof emailUserConfirm === 'string') {
            let contextE = {
                userName: (await visit.user).name,
                visitDate: (0, moment_1.default)(visit.dateVisit).format('YYYY-MM-DD'),
                visitorName: (await visit.user).name,
                statusVisit: visit.status,
                urlAcept: process.env.EMAIL_FRONTEND + 'public/confimEmail/confirmed/' + visit.id + '/' + token,
                urlRech: process.env.EMAIL_FRONTEND + 'public/confimEmail/canceled/' + visit.id + '/' + token
            };
            await this.mailService.sendMail(emailUserConfirm, "Confirmación de Visita", "aceptOrDecline", contextE);
            const urlAcpet = process.env.EMAIL_FRONTEND + 'public/confimEmail/confirmed/' + visit.id + '/' + token;
            const urlRech = process.env.EMAIL_FRONTEND + 'public/confimEmail/canceled/' + visit.id + '/' + token;
            this.sendWhastappAdmin(visit, urlAcpet, urlRech);
        }
    }
    async findActivityNowUser(context, id) {
        const visits = await this.find(context, {
            where: {
                user: {
                    id: id
                },
                status: visit_emun_1.StatusVisitEnum.initiated
            },
        });
        return visits.length > 0;
    }
    async findOneVisitDetail(context, id) {
        const visit = await this.find(context, {
            where: {
                id: id
            },
            relations: {}
        });
    }
    async sendMail(context, entity) {
        if (entity.status == visit_emun_1.StatusVisitEnum.confirmed) {
            let contextE = {
                userName: (await entity.user).name,
                visitDate: (0, moment_1.default)(entity.dateVisit).format('YYYY-MM-DD'),
                visitorName: (await entity.user).name,
                statusVisit: entity.status,
                comment: entity.status
            };
            await this.mailService.sendMail((await entity.user).email, "Visita Confirmada", "confirm", contextE);
        }
    }
    async sendMailMockedFail(context, entity) {
        let contextE = {
            userName: (await entity.user).name,
            visitDate: (0, moment_1.default)(entity.createdAt).format('YYYY-MM-DD'),
            comment: entity.description,
            latitude: entity.latitude,
            longitude: entity.longitude
        };
        await this.mailService.sendMail('andresmolinag2018@gmail.com', "Alerta: Ubicación Incorrecta Reportada", "locationMocked", contextE);
    }
    async findAllVisitDashboard(context) {
        const earrings = await this.find(context, {
            where: {
                status: (0, typeorm_1.In)([visit_emun_1.StatusVisitEnum.confirmed, visit_emun_1.StatusVisitEnum.reprogrammed]),
                user: {
                    id: context.user.id
                }
            },
            order: {
                dateVisit: 'DESC'
            },
            take: 5
        });
        const realized = await this.find(context, {
            where: {
                status: visit_emun_1.StatusVisitEnum.realized,
            },
            order: {
                dateVisit: 'DESC'
            },
            take: 5
        });
        return {
            earrings,
            realized
        };
    }
    async acceptOrDeclineVisit(context, id, status) {
        const visita = await this.findOne(context, id);
        if (!visita) {
            throw new Error("NO EXISTE EL ID DE LA VISITA");
        }
        if (visita.status == visit_emun_1.StatusVisitEnum.canceled)
            throw new Error("ESTA VISITA YA FUE CANCELADA");
        if (visita.status == visit_emun_1.StatusVisitEnum.confirmed)
            throw new Error("ESTA VISITA YA FUE CONFIRMADA");
        if (visita.status == visit_emun_1.StatusVisitEnum.realized)
            throw new Error("ESTA VISITA YA FUE RELIZADA");
        await this.update(context, id, { id, status: status });
        const number = (await visita.user).phoneNumber;
        this.sendWhastapp(number, visita);
        this.sendMail(context, visita);
        return "VISITA CONFIRMADA CON EXITO";
    }
    async countStatusVisitByDate(context, dateInit, dateFinis, res) {
        const repository = this.getRepository(context);
        const sql = (0, index_sql_1.QUERY_VISIT_STATUS_BY_DATE)(dateInit, dateFinis);
        const datos = await repository.manager.query(sql);
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Datos');
        worksheet.columns = [
            { header: 'Trabajador', key: 'trabajador', width: 30 },
            { header: 'Total Programadas', key: 'totalProgramadas', width: 20 },
            { header: 'Total Realizadas', key: 'totalRealizadas', width: 20 },
            { header: 'Total Cancelada', key: 'totalCancelada', width: 20 },
            { header: 'Total Confirmada', key: 'totalConfirmada', width: 20 },
            { header: 'Total Visitas', key: 'totalVisitas', width: 15 },
        ];
        worksheet.getRow(1).eachCell((cell) => {
            cell.style = {
                font: { bold: true, color: { argb: 'FFFFFFFF' } },
                fill: {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FF808080' },
                },
            };
        });
        datos.forEach(dato => {
            worksheet.addRow({
                userId: dato.userId,
                trabajador: dato.trabajador,
                totalVisitas: dato.totalVisitas,
                totalProgramadas: dato.totalProgramadas,
                totalRealizadas: dato.totalRealizadas,
                totalCancelada: dato.totalCancelada,
                totalConfirmada: dato.totalConfirmada,
            });
        });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=reporte-${Date.now()}.xlsx`);
        await workbook.xlsx.write(res);
        res.end();
    }
    async countStatusVisitStatistic(context, dateInit, dateFinis) {
        const repository = this.getRepository(context);
        const sql = (0, index_sql_1.QUERY_VISIT_STATUS_BY_DATE)(dateInit, dateFinis);
        const datos = await repository.manager.query(sql);
        const minimiVisit = await this.parameterService.findOneCodigo(context, 'MIN-VISIT-MONTH', true);
        const response = datos?.map((x) => {
            return {
                name: x.trabajador,
                totalVisitas: x.totalVisitas,
                totalProgramadas: x.totalProgramadas,
                totalRealizadas: x.totalRealizadas,
                totalCancelada: x.totalCancelada,
                totalConfirmada: x.totalConfirmada,
                minimiVisit: +minimiVisit
            };
        });
        return response;
    }
    async countStatusVisitComentStatic(context, dateInit, dateFinis) {
        const repository = this.getRepository(context);
        const sql = (0, index_sql_1.QUERY_VISIT_STATUS_BY_COMENT)(dateInit, dateFinis);
        const datos = await repository.manager.query(sql);
        const response = datos?.map((x) => {
            return {
                name: x.trabajador,
                totalComentarios: x.totalComentarios,
                totalPendientes: x.totalPendientes,
                totalRealizadas: x.totalRealizadas,
                totalCancelada: x.totalCancelada,
            };
        });
        return response;
    }
    async commisionDataUser() {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get('http://localhost:3004/some/POGRESO_DE_VENTAS'));
            return response.data;
        }
        catch (err) {
            return new common_1.BadRequestException(err.message);
        }
    }
};
exports.VisitService = VisitService;
exports.VisitService = VisitService = __decorate([
    (0, common_1.Injectable)(),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => visit_coment_service_1.VisitComentService))),
    __param(7, (0, common_1.Inject)((0, common_1.forwardRef)(() => tool_visit_service_1.VisitToolVisittService))),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        users_service_1.UsersService,
        parameter_service_1.ParameterService,
        visit_type_service_1.VisitTypeService,
        email_service_1.MailService,
        axios_1.HttpService,
        visit_coment_service_1.VisitComentService,
        tool_visit_service_1.VisitToolVisittService])
], VisitService);
//# sourceMappingURL=visit.service.js.map