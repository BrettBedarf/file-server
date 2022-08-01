import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';
/**
 * Holds symbols for inversify ioc injectable classes
 */
const TYPES = {
	FileUploaderRepo: Symbol.for('FileUploaderRepo'),
	UploadFileUseCase: Symbol.for('UploadFileUseCase'),
	FileMetaRepo: Symbol.for('FileMetaRepo'),
};

export { TYPES };
