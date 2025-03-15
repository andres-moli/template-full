import { HttpService } from '@nestjs/axios';
import { ISmsResponse, ISmsRequest } from '../interface/sms.interface';
export declare class SmsManagerService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendSms(structure: ISmsRequest): Promise<ISmsResponse>;
}
