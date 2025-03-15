"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactional = void 0;
const common_1 = require("@nestjs/common");
const transaction_interceptor_1 = require("../interceptors/transaction.interceptor");
const Transactional = () => (0, common_1.UseInterceptors)(transaction_interceptor_1.TransactionInterceptor);
exports.Transactional = Transactional;
//# sourceMappingURL=transactional.decorator.js.map