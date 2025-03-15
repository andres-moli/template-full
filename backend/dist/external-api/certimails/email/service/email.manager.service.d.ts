import { HttpService } from '@nestjs/axios';
import { IEmailResponse, IEmailRequest } from '../interface/email.interface';
export declare class EmailManagerService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendEmail(structure: IEmailRequest): Promise<IEmailResponse>;
}
