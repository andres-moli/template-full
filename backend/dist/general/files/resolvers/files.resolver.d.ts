import { FileInfo } from '../entities/file-info.entity';
import { FilesService } from '../services/files.service';
export declare class FilesResolver {
    private readonly service;
    constructor(service: FilesService);
    findOne(id: string, context: any): Promise<FileInfo>;
    removeFile(id: string, context: any): Promise<string>;
    getUrl(file: FileInfo, context: any): Promise<String>;
}
