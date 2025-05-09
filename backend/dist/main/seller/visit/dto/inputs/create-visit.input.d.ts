import { StatusVisitEnum } from '../../emun/visit.emun';
import { CreateVisitToolUnitInput } from 'src/main/seller/tools/tool-visit/dto/input/create-visit-tool-unit.input';
export declare class CreateVisitInput {
    description?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    mocked: boolean;
    dateVisit: Date;
    userId: string;
    typeId: string;
    status: StatusVisitEnum;
    fileId?: string;
    tools: CreateVisitToolUnitInput[];
}
