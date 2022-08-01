import { TYPES } from '@/ioc/types';
import { FileUpload } from '@/entities/file.entity.types';
import { FileUploaderRepo } from '@/repos/file-uploader.repo.types';
import { injectable, inject } from 'inversify';
import { UploadFileUseCase } from './upload-file.uc.types';
import { FileMetaRepo } from '@/repos/file-meta.repo.types';

@injectable()
class UploadFile implements UploadFileUseCase {
	private _uploader: FileUploaderRepo;

	public constructor(
		@inject(TYPES.FileUploaderRepo) uploader: FileUploaderRepo,
		@inject(TYPES.FileMetaRepo) private _fileMetaRepo: FileMetaRepo
	) {
		this._uploader = uploader;
	}
	public async upload(file: FileUpload) {
		// upload file to provider
		const uploadedFile = await this._uploader.upload(file);
		// save file meta to db
		const insertedMeta = await this._fileMetaRepo.insert(uploadedFile);

		return insertedMeta;
	}
}

export default UploadFile;
