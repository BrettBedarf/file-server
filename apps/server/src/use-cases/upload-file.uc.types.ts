import { FileUpload, UploadedFileMeta } from '../entities/file.entity.types';

export interface UploadFileUseCase {
	upload: (file: FileUpload) => Promise<UploadedFileMeta>;
}
