import { FileMetaUpload, UploadedFileMeta } from '@/entities/file.entity.types';

export interface FileMetaRepo {
	insert: (file: FileMetaUpload) => Promise<UploadedFileMeta>;
}
