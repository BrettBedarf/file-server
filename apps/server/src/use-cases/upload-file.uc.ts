import { TYPES } from '@/ioc/types';
import { FileUpload, UploadedFile } from '@/entities/file.entity.types';
import { FileUploaderRepo } from '@/repos/file-uploader.repo.types';
import { injectable, inject } from 'inversify';
import { UseCaseErrorTypes, UseCaseOps, UseCaseResult } from './uc.types';
import { UploadFilesUseCase } from './upload-file.uc.types';
import { serializeError } from 'serialize-error';

@injectable()
class UploadFiles implements UploadFilesUseCase {
	private _uploader: FileUploaderRepo;

	public constructor(
		@inject(TYPES.FileUploaderRepo) uploader: FileUploaderRepo
	) {
		this._uploader = uploader;
	}

	public async upload(
		file: FileUpload
	): Promise<UseCaseResult<UploadedFile, UseCaseOps>> {
		const result = await this._uploader.upload(file);

		if (result.success) {
			// TODO: save file metadata in db
			console.log(
				`Successfully saved file ${result.result.meta.id} to ${this._uploader.providerName} provider`
			);
			return {
				success: true,
				result: Array.isArray(result.result)
					? result.result
					: [result.result],
			};
		} else {
			console.error(
				`Error uploading file to ${
					result.error.provider
				} provider:\n ${serializeError(result.error)}`
			);
			return {
				success: false,
				error: {
					errorType: UseCaseErrorTypes.PROVIDER_ERROR,
					message: result.error.message,
					details:
						process.env.NODE_ENV === 'production'
							? undefined
							: result.error.stack,
				},
			};
		}
	}
}

export default UploadFiles;
