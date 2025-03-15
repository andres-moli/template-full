import { GridFSBucketReadStream } from 'mongodb';
import { Connection } from 'mongoose';
import { MongoFileInfo } from '../dto/models/file-info.model';
import { DtoToBase64, SaveToFileBase64 } from '../dto/args/file-b64.arg';
export declare class FilesManagerService {
    private readonly connection;
    private fileModel;
    constructor(connection: Connection);
    readStream(id: string): Promise<GridFSBucketReadStream>;
    uploadFile(body: DtoToBase64): Promise<SaveToFileBase64>;
    private saveStream;
    findInfo(id: string): Promise<MongoFileInfo>;
    deleteFile(id: string): Promise<boolean>;
    donwloadFile(id: string): Promise<string>;
    parseFileName(fileName: string): {
        fileName: string;
        fileType: string;
        fileExtension: string;
    };
}
