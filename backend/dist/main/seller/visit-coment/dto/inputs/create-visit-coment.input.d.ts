import { VisitComentStatusEnum, VisitComentTypeEnum } from '../../emun/visit-coment.emun';
export declare class CreateVisitComentInput {
    description?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    visitId: string;
    date?: Date;
    mocked: boolean;
    dateFull?: Date;
    time?: Date;
    fileId?: string;
    status?: VisitComentStatusEnum;
    type: VisitComentTypeEnum;
}
