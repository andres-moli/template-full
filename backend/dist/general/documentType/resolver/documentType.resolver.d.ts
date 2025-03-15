import { DocumentType } from '../entities/documentType.entity';
import { DocumentTypeService } from '../services/documentType.service';
declare const DocumentTypeResolver_base: import("@nestjs/common").Type<{
    readonly service: DocumentTypeService;
    create(createInput: import("../dto/create-document-type.input").CreateDocumentTypeInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<DocumentType>;
    update(updateInput: import("../dto/update-document-type.input").UpdateDocumentTypeInput, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<DocumentType>;
    remove(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<DocumentType>;
    findOne(id: unknown, context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<DocumentType>;
    findAll(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<DocumentType[]>;
    findOneArg(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<DocumentType>;
    Count(context: import("../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class DocumentTypeResolver extends DocumentTypeResolver_base {
}
export {};
