// import { RepoError as IRepoError, RepoOps } from './repo.types';

export class RepoError extends Error {
	public category: 'repo' = 'repo';
	constructor(public provider: string, public message: string) {
		super(message);
	}
}

// export class FileUploaderError
// 	extends RepoError
// 	implements IRepoError<RepoOps.FILE_UPLOAD>
// {
// 	public operation = RepoOps.FILE_UPLOAD;

// 	constructor(provider: string, message: string) {
// 		super(provider, message);
// 	}
// }
