import { TypeMessage, TypeSuscription } from "../../enums/type-suscription.enum";
export declare class GeneralSuscription {
    id: number;
    type: TypeMessage;
    subscription: string;
    info?: NotificationModel | ProgressModel;
}
export declare class ProgressModel {
    title: string;
    description: string;
    maxItem: number;
    currentItem: number;
    percentage: string;
    __typename: string;
}
export declare class NotificationModel {
    title: string;
    description: string;
    type: TypeSuscription;
    __typename: string;
}
