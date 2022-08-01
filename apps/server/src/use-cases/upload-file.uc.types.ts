import { FileUpload, UploadedFile } from '../entities/file.entity.types';
import { UseCaseErrorTypes, UseCaseOps, UseCaseResult } from './uc.types';

export interface UploadFilesUseCase {
	upload: (
		file: FileUpload
	) => Promise<UseCaseResult<UploadedFile, UseCaseOps.UPLOAD_FILES>>;
}
