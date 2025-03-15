import { PubSub } from "graphql-subscriptions";
import { GeneralSuscription } from "../dto/args/general-message.args";
export declare class SuscriptionService {
    private pubSub;
    constructor(pubSub: PubSub);
    messageSuscription(data: GeneralSuscription): Promise<void>;
}
