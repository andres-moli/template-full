import { StatusVisitEnum } from '../../emun/visit.emun';
export declare class CreateVisitInput {
    description?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    mocked: boolean;
    dateVisit: Date;
    userId: string;
    status: StatusVisitEnum;
}
