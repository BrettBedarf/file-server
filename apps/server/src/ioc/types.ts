import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';
import FileMetaModel from '../repos/meta-storage/file-meta-model.repo';
/**
 * Holds symbols for inversify ioc injectable classes
 */
const TYPES = {
	FileUploaderRepo: Symbol.for('FileUploaderRepo'),
	UploadFileUseCase: Symbol.for('UploadFileUseCase'),
	FileMetaRepo: Symbol.for('FileMetaRepo'),
	FileMetaMongoModel: Symbol.for('FileMetaMongoModel'),
};

export { TYPES };
