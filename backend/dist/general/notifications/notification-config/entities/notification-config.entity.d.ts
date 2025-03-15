import { NotificationTypes } from '../enums/notification-type.enum';
import { CrudEntity } from '../../../../patterns/crud-pattern/entities/crud-entity';
import { Profile } from '../../../../external-api/certimails/profile/entities/profile.entity';
export declare class NotificationConfig extends CrudEntity {
    name: string;
    profile: Profile;
    type: NotificationTypes;
    subtype: string;
    hasEmail: boolean;
    hasTwoStepsEmail: boolean;
    hasSms: boolean;
    hasTwoStepsSms: boolean;
    hasWss: boolean;
    hasTwoStepsWss: boolean;
    hasPush: boolean;
    hasTwoStepsPush: boolean;
    emailPrincipalCode?: string;
    emailDuplicateCode?: string;
    smsBody?: string;
    wssCode?: string;
    hasPersistent: boolean;
    persistentExpiration?: Date;
    persistentHtml?: string;
}
