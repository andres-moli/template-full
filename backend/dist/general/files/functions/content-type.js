"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMimeTypeFromExtension = void 0;
function getMimeTypeFromExtension(extension) {
    const mimeTypes = {
        pdf: 'application/pdf',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        csv: 'text/csv',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
        ogg: 'audio/ogg',
        mp4: 'video/mp4',
        ogv: 'video/ogg',
    };
    return mimeTypes[extension.toLowerCase()];
}
exports.getMimeTypeFromExtension = getMimeTypeFromExtension;
//# sourceMappingURL=content-type.js.map