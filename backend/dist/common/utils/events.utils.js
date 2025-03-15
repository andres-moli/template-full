"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsUtils = void 0;
const common_1 = require("@nestjs/common");
class EventsUtils {
    static async callOne(eventEmitter, eventName, payload) {
        const result = await eventEmitter.emitAsync(eventName, payload);
        if (!result || result.length === 0)
            throw new common_1.InternalServerErrorException(`no service expecting ${eventName}'`);
        if (result[0] === undefined || result[0] === null)
            throw new common_1.InternalServerErrorException(`${eventName}' returned an  null/undefined value`);
        return result[0];
    }
}
exports.EventsUtils = EventsUtils;
//# sourceMappingURL=events.utils.js.map