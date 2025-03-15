import { HttpService } from '@nestjs/axios';
import { IWssResponse, IWssRequest } from '../interface/wss.interface';
export declare class WssManagerService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendWss(structure: IWssRequest): Promise<IWssResponse>;
}
