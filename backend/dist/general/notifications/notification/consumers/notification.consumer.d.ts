import { Job } from "bull";
import { NotificationService } from "../services/notification.service";
export declare class NotificationConsumer {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    createNotification(job: Job): Promise<{
        done: boolean;
    }>;
    onActive(job: Job): void;
}
