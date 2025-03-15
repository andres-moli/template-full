import { VisitComentService } from '../services/visit-coment.service';
import { VisitComent } from '../entities/visit-coment.entity';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, VisitComent, import("../dto/inputs/create-visit-coment.input").CreateVisitComentInput, import("../dto/inputs/update-visit-coment.input").UpdateVisitComentInput, VisitComentService, import("../dto/args/find-visit-coment.args").FindVisitComentArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const VisitComentResolver_base: import("@nestjs/common").Type<{
    readonly service: VisitComentService;
    create(createInput: import("../dto/inputs/create-visit-coment.input").CreateVisitComentInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitComent>;
    update(updateInput: import("../dto/inputs/update-visit-coment.input").UpdateVisitComentInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitComent>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitComent>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<VisitComent>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<VisitComent[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<VisitComent>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class VisitComentResolver extends VisitComentResolver_base {
}
export {};
