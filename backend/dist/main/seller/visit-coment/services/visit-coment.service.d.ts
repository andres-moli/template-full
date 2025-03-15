import { Repository } from 'typeorm';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { FindVisitComentArgs } from '../dto/args/find-visit-coment.args';
import { VisitComent } from '../entities/visit-coment.entity';
import { CreateVisitComentInput } from '../dto/inputs/create-visit-coment.input';
import { UpdateVisitComentInput } from '../dto/inputs/update-visit-coment.input';
import { VisitService } from '../../visit/services/visit.service';
import { FilesService } from 'src/general/files/services/files.service';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, VisitComent, CreateVisitComentInput, UpdateVisitComentInput, FindVisitComentArgs, IContext>;
declare const VisitComentService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, VisitComent, CreateVisitComentInput, UpdateVisitComentInput, FindVisitComentArgs, IContext>>;
export declare class VisitComentService extends VisitComentService_base {
    private readonly visitService;
    private readonly fileService;
    constructor(visitService: VisitService, fileService: FilesService);
    beforeCreate(context: IContext, repository: Repository<VisitComent>, entity: VisitComent, createInput: CreateVisitComentInput): Promise<void>;
    afterCreate(context: IContext, repository: Repository<VisitComent>, entity: VisitComent, createInput: CreateVisitComentInput): Promise<void>;
}
export {};
