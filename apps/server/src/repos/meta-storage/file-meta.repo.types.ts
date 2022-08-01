import { FileMetaBase, UploadedFileMeta } from '@/entities/file.entity.types';

export interface FileMetaRepo {
	insert: (file: FileMetaBase) => Promise<UploadedFileMeta>;
}
