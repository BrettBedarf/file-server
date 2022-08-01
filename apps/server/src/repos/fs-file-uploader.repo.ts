import { FileUpload } from '@/entities/file.entity.types';
import { FileUploaderError } from './errors.repo';
import { injectable } from 'inversify';
import { FileUploaderRepo } from './file-uploader.repo.types';
import { UploadedFileMeta } from '../entities/file.entity.types';

/** File system provider */
@injectable()
class FsFileUploader implements FileUploaderRepo {
	public providerName = 'fs';
	async upload(file: FileUpload) {
		console.log(`fs file upload provider not implemented yet`);
		throw new Error('not implemented yet');
		return {} as UploadedFileMeta;
	}
}

export default FsFileUploader;
