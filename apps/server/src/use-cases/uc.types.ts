import { FileUpload, UploadedFile } from '@/entities/file.entity.types';

export type UseCaseResult<E extends UseCaseEntities, T extends UseCaseOps> =
	| UseCaseSuccess<E>
	| UseCaseFailure<T>;

interface UseCaseSuccess<E extends UseCaseEntities> {
	success: true;
	result: E[];
}
/** Available to controller for public http error formatting */
interface UseCaseFailure<T extends UseCaseOps> {
	success: false;
	error: UseCaseError<T>;
}

interface UseCaseError<T extends UseCaseOps> {
	errorType: UseCaseErrorTypes;
	message: string;
	details?: any;
}

export enum UseCaseOps {
	UPLOAD_FILES = 'upload-files',
}

/** Union of possible use case return entities */
type UseCaseEntities = UploadedFile | FileUpload;

export enum UseCaseErrorTypes {
	NOT_FOUND = 'not-found',
	// TOO_LARGE = 'too-large',
	UNSUPPORTED_FILE_TYPE = 'bad-file-type',
	/** error with external provider/repo */
	PROVIDER_ERROR = 'provider-error',
	/** catchall */
	UNKNOWN = 'unknown',
}
