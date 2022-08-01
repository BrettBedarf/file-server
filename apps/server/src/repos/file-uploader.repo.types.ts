import { FileUpload, UploadedFile } from '../entities/file.entity.types';
import { RepoOps, RepoResult } from './repo.types';
/**
 * Uploads one of more files to storage provider
 */
export interface FileUploaderRepo {
	providerName: string;
	upload: (file: FileUpload) => Promise<FileUploaderRepoResult>;
}

export type FileUploaderRepoResult = RepoResult<
	UploadedFile,
	RepoOps.FILE_UPLOAD
>;
