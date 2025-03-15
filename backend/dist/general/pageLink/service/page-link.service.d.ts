import { PageLink } from "../entities/page-link.entity";
import { CreatePageLinkInput } from "../dto/create-page-link.input";
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, PageLink, CreatePageLinkInput, CreatePageLinkInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const PageLinkService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, PageLink, CreatePageLinkInput, CreatePageLinkInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>>;
export declare class PageLinkService extends PageLinkService_base {
}
export {};
