import { StatusVisitEnum } from "../../emun/visit.emun";
export declare class UpdateStatusInput {
    id: string;
    description?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    dateVisit: Date;
    status: StatusVisitEnum;
    fileId?: string;
    mocked?: boolean;
}
