"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPasswordScalar = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const functions_1 = require("../../../common/functions");
exports.CustomPasswordScalar = new graphql_1.GraphQLScalarType({
    name: 'ValidatePassword',
    description: 'Description',
    serialize: (value) => {
        if (typeof value === 'string') {
            if (!(0, functions_1.validateString)(value)) {
                throw new common_1.BadRequestException('Password does not meet security parameters');
            }
            return value;
        }
    },
    parseValue: (value) => {
        if (typeof value === 'string') {
            if (!(0, functions_1.validateString)(value)) {
                throw new common_1.BadRequestException('Password does not meet security parameters');
            }
            return value;
        }
        throw new common_1.BadRequestException('Password does not meet security parameters');
    },
    parseLiteral: (ast) => {
        if (ast.kind === 'StringValue') {
            if (!(0, functions_1.validateString)(ast.value)) {
                throw new common_1.BadRequestException('Password does not meet security parameters');
            }
            return ast.value;
        }
        throw new common_1.BadRequestException('Password does not meet security parameters');
    }
});
//# sourceMappingURL=password.scalar.js.map