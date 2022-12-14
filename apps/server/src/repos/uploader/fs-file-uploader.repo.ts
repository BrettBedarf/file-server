import {
	FileMetaUpload,
	FileUpload,
	ProviderTypes,
} from '@/entities/file.entity.types';
import { injectable } from 'inversify';
import { FileUploaderRepo } from './file-uploader.repo.types';
import fs from 'fs';
import { resolve } from 'path';
import { RepoError } from '../errors.repo';

/** File system provider */
@injectable()
class FsFileUploader implements FileUploaderRepo {
	public providerName = 'fs';

	constructor(private pathPrefix: string = './storage') {}

	async upload(file: FileUpload): Promise<FileMetaUpload> {
		const qualifiedPath = resolve(
			`${this.pathPrefix}/${file.meta.folderPath.join('/')}`
		);
		const writeableStream = fs.createWriteStream(qualifiedPath);
		file.data.pipe(writeableStream);

		await new Promise((resolve, reject) => {
			writeableStream.on('error', err => {
				reject(new RepoError('fs', err.message));
			});
			writeableStream.on('finish', () => {
				resolve({});
			});
			writeableStream.on('end', () => {
				resolve({});
			});
			writeableStream.on('close', () => {
				resolve({});
			});
		});
		// get new file size

		return {
			...file.meta,
			providerType: ProviderTypes.FS,
		};
	}
}

export default FsFileUploader;
