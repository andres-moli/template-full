"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterableField = void 0;
const graphql_1 = require("@nestjs/graphql");
function FilterableField(returnTypeFuncOrOptions) {
    return (target, propertyName, descriptor) => {
        (0, graphql_1.Field)()(target, propertyName, descriptor);
        Reflect.defineMetadata('graphql:filterableField', true, target, propertyName);
    };
}
exports.FilterableField = FilterableField;
;
//# sourceMappingURL=filterable-field.decorator.js.map