import { FileMetaUpload, FileUpload } from '../entities/file.entity.types';
/**
 * Uploads one of more files to storage provider
 */
export interface FileUploaderRepo {
	providerName: string;
	upload: (file: FileUpload) => Promise<FileMetaUpload>;
}
