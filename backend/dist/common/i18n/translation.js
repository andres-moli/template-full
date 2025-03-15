"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translations = void 0;
class Translations {
    translateText(i18n, message, args) {
        return i18n.t(`test.${message}`, { args });
    }
    guard(i18n, message, args) {
        return i18n.t(`guard.${message}`, { args });
    }
}
exports.Translations = Translations;
//# sourceMappingURL=translation.js.map