import { I18nContext } from "nestjs-i18n";
export declare class Translations {
    translateText(i18n: I18nContext, message: string, args: object): string;
    guard(i18n: I18nContext, message: string, args: object): string;
}
