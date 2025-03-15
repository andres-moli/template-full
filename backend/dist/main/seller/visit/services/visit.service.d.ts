import { Repository } from 'typeorm';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { Visit } from '../entities/visit.entity';
import { CreateVisitInput } from '../dto/inputs/create-visit.input';
import { UpdateVisitInput } from '../dto/inputs/update-visit.input';
import { FindVisitArgs } from '../dto/args/find-visit.args';
import { ClientService } from '../../client/services/client.service';
import { UsersService } from 'src/security/users/services/users.service';
import { ParameterService } from 'src/general/parameters/service/parameter.service';
import { StatusVisitEnum } from '../emun/visit.emun';
import { VisitTypeService } from '../../visit-type/service/visit-type.service';
import { MailService } from 'src/general/email/service/email.service';
import { Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { VisitComentService } from '../../visit-coment/services/visit-coment.service';
import { UpdateStatusInput } from '../dto/inputs/update-status-visit.dto';
import { VisitComent } from '../../visit-coment/entities/visit-coment.entity';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Visit, CreateVisitInput, UpdateVisitInput, FindVisitArgs, IContext>;
declare const VisitService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Visit, CreateVisitInput, UpdateVisitInput, FindVisitArgs, IContext>>;
export declare class VisitService extends VisitService_base {
    private readonly clientService;
    private readonly usersService;
    private readonly parameterService;
    private readonly visitTypeService;
    private readonly mailService;
    private readonly httpService;
    private readonly visitComentService;
    constructor(clientService: ClientService, usersService: UsersService, parameterService: ParameterService, visitTypeService: VisitTypeService, mailService: MailService, httpService: HttpService, visitComentService: VisitComentService);
    beforeCreate(context: IContext, repository: Repository<Visit>, entity: Visit, createInput: CreateVisitInput): Promise<void>;
    beforeUpdate(context: IContext, repository: Repository<Visit>, entity: Visit, updateInput: UpdateVisitInput): Promise<void>;
    calculateTotalHours(visit: Visit): Promise<number>;
    getVisitWithTotalHours(userId: string): Promise<number>;
    afterCreate(context: IContext, repository: Repository<Visit>, entity: Visit, createInput: CreateVisitInput): Promise<void>;
    finishVisit(context: IContext, updateInput: UpdateStatusInput): Promise<Visit>;
    sendWhastapp(number: string, entity: Visit): Promise<boolean>;
    sendWhastappAdmin(entity: Visit, urlAcept: string, urlRechazar: string): Promise<boolean>;
    sendMailAdmin(context: IContext, visit: Visit): Promise<void>;
    findActivityNowUser(context: IContext, id: string): Promise<boolean>;
    findOneVisitDetail(context: IContext, id: string): Promise<void>;
    sendMail(context: IContext, entity: Visit): Promise<void>;
    sendMailMockedFail(context: IContext, entity: VisitComent): Promise<void>;
    findAllVisitDashboard(context: IContext): Promise<{
        earrings: Visit[];
        realized: Visit[];
    }>;
    acceptOrDeclineVisit(context: IContext, id: string, status: StatusVisitEnum): Promise<string>;
    countStatusVisitByDate(context: IContext, dateInit: string, dateFinis: string, res: Response): Promise<void>;
    countStatusVisitStatistic(context: IContext, dateInit: string, dateFinis: string): Promise<any>;
    countStatusVisitComentStatic(context: IContext, dateInit: string, dateFinis: string): Promise<any>;
    commisionDataUser(): Promise<any>;
}
export {};
