/// <reference types="node" />
import { FileModes } from '../enums/file-modes.enum';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
export declare class FileInfo extends CrudEntity {
    fileName: string;
    fileExtension: string;
    fileMode: FileModes;
    fileBuffer?: Buffer;
    fileMongoId?: string;
    fileUrl?: string;
}
