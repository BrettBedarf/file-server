import { TYPES } from '@/ioc/types';
import {
	FileMetaBase,
	FileMetaUpload,
	FileUpload,
} from '@/entities/file.entity.types';
import { FileUploaderRepo } from '@/repos/uploader/file-uploader.repo.types';
import { injectable, inject } from 'inversify';
import { UploadFileUseCase } from './upload-file.uc.types';
import { FileMetaRepo } from '@/repos/meta-storage/file-meta.repo.types';

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
	public async makeNewMeta(fileMeta: FileMetaUpload) {
		// save file meta to db
		const insertedMeta = await this._fileMetaRepo.insert(fileMeta);
		return insertedMeta;
	}
	public getFileWriteStream() {
		// return this._uploader.getFileWriteStream();
		return;
	}
}

export default UploadFile;
