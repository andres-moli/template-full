/// <reference types="multer" />
/// <reference types="multer-gridfs-storage" />
import { Response } from 'express';
import { FileInfo } from '../entities/file-info.entity';
import { CreateFileInput } from '../dto/inputs/create-file.input';
import { FilesManagerService } from './files-manager.service';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
declare const FilesService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/data-service.interface").IDataService<unknown, FileInfo, import("../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext, import("../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>>;
export declare class FilesService extends FilesService_base {
    private filesManagerService;
    constructor(filesManagerService: FilesManagerService);
    create(context: IContext, createFileInput: CreateFileInput): Promise<FileInfo>;
    saveImageUrl(context: IContext, file: Express.Multer.File): Promise<FileInfo>;
    download(context: IContext, id: string, res: Response): Promise<void>;
}
export {};
