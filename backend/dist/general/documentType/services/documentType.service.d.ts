import { DocumentType } from '../entities/documentType.entity';
import { CreateDocumentTypeInput } from '../dto/create-document-type.input';
import { UpdateDocumentTypeInput } from '../dto/update-document-type.input';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, DocumentType, CreateDocumentTypeInput, UpdateDocumentTypeInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const DocumentTypeService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, DocumentType, CreateDocumentTypeInput, UpdateDocumentTypeInput, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, import("../../../patterns/crud-pattern/interfaces/context.interface").IContext>>;
export declare class DocumentTypeService extends DocumentTypeService_base {
}
export {};
