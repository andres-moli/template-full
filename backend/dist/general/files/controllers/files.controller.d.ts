import { Response } from 'express';
import { FilesService } from '../services/files.service';
import { FilesManagerService } from '../services/files-manager.service';
import { FileInfo } from '../entities/file-info.entity';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare class FilesController {
    private filesService;
    private filesManagerService;
    constructor(filesService: FilesService, filesManagerService: FilesManagerService);
    upload(context: IContext, files: any): Promise<FileInfo>;
    download(context: IContext, id: string, res: Response): Promise<void>;
}
