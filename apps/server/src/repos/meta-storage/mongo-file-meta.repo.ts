import { FileMetaUpload, UploadedFileMeta } from '@/entities/file.entity.types';
import { TYPES } from '@/ioc/types';
import { inject, injectable } from 'inversify';
import mongoose, { Model } from 'mongoose';
import { FileMetaRepo } from './file-meta.repo.types';
import { RepoError } from '../errors.repo';
import { serializeError } from 'serialize-error';

@injectable()
class MongoFileMetaRepo implements FileMetaRepo {
	public constructor(
		@inject(TYPES.FileMetaMongoModel)
		private _metaModel: Model<FileMetaUpload>
	) {}

	public async insert(file: FileMetaUpload): Promise<UploadedFileMeta> {
		try {
			const doc = new this._metaModel(file);
			const result = await doc.save();
			const { _id, ...rest } = result.toObject();

			return { _id: _id.toString(), ...rest };
		} catch (error) {
			// mongoose docs don't give a way to type guard mongoose error, source
			// looks like all inherited from MongooseError
			if (
				error instanceof mongoose.MongooseError ||
				(error instanceof Error && error.name === 'MongoError')
			) {
				throw new RepoError(
					'mongo',
					`mongoose error type ${error.name} inserting file meta: ${error.message}`
				);
			} else if (error instanceof Error) {
				throw new RepoError(
					'mongo',
					`uncaught error inserting file meta: ${error.message}`
				);
			} else {
				throw new RepoError(
					'mongo',
					`unknown error type inserting file meta:\n ${serializeError(
						error
					)}`
				);
			}
		}
	}
}
export default MongoFileMetaRepo;
