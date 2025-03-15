import { PageLink } from "../entities/page-link.entity";
import { PageLinkService } from "../service/page-link.service";
declare const PageLinkResolver_base: import("@nestjs/common").Type<{
    readonly service: PageLinkService;
    create(createInput: import("../dto/create-page-link.input").CreatePageLinkInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<PageLink>;
    update(updateInput: import("../dto/create-page-link.input").CreatePageLinkInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<PageLink>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<PageLink>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<PageLink>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<PageLink[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<PageLink>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class PageLinkResolver extends PageLinkResolver_base {
}
export {};
