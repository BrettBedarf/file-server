import { UploadedFile } from '../entities/file.entity.types';

/** Types of operations. Related to entities, used to classify logging */
export enum RepoOps {
	FILE_UPLOAD = 'file-upload',
}

/**
 * Union of possible repo entities
 */
type RepoEntities = UploadedFile;

/** Generic structure for all repo responses */
export type RepoResult<E extends RepoEntities, T extends RepoOps> =
	| RepoSuccess<E>
	| RepoFailure<T>;

export interface RepoSuccess<E extends RepoEntities> {
	success: true;
	result: E;
}

export interface RepoFailure<T extends RepoOps> {
	success: false;
	error: RepoError<T>;
}

export interface RepoError<T extends RepoOps> extends Error {
	category: 'repo';
	operation: T;
	provider: string;
}
