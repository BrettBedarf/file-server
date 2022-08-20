import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';
import FileMetaModel from '../repos/meta-storage/file-meta-model.repo';
import FileController from '../controllers/file.ctrl';
/**
 * Holds symbols for inversify ioc injectable classes
 */
const TYPES = {
	FileUploaderRepo: Symbol.for('FileUploaderRepo'),
	UploadFileUseCase: Symbol.for('UploadFileUseCase'),
	FileMetaRepo: Symbol.for('FileMetaRepo'),
	FileMetaMongoModel: Symbol.for('FileMetaMongoModel'),
	FileController: Symbol.for('FileController'),
};

export { TYPES };
