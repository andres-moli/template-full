import { Job } from "bull";
import { NotificationGroupService } from "../services/notification-group.service";
import { SuscriptionService } from "../../../suscriptions/services/suscription.service";
export declare class NotificationGroupConsumer {
    private readonly notificationGroupService;
    private readonly suscriptionService;
    constructor(notificationGroupService: NotificationGroupService, suscriptionService: SuscriptionService);
    onActive(job: Job): Promise<void>;
    createNotificationGroup(job: Job): Promise<{
        done: boolean;
    }>;
}
