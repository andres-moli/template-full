import { VisitService } from "../services/visit.service";
import { IContext } from "src/patterns/crud-pattern/interfaces/context.interface";
import { StatusVisitEnum } from "../emun/visit.emun";
export declare class VisitController {
    private readonly visitService;
    constructor(visitService: VisitService);
    acceptOrDeclineVisit(context: IContext, id: string, status: StatusVisitEnum): Promise<string>;
    countStatusVisitByDate(context: IContext, dateInit: string, dateFinish: string): Promise<any>;
    countStatusVisitComentStatic(context: IContext, dateInit: string, dateFinish: string): Promise<any>;
    commisionsDataUser(): Promise<any>;
}
