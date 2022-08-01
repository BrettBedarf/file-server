import { FileUploaderRepo } from './file-uploader.repo.types';

/** Concrete implementation of file uploader repo */
// class S3FileUploaderRepo implements FileUploaderRepo {
// 	private _s3: S3;

// 	public constructor() {
// 		this._s3 = new S3({
// 			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// 			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// 			region: process.env.AWS_REGION,
// 		});
// 	}

// 	async upload(
// 		files: FileUpload | FileUpload[]
// 	): Promise<UploadedFile | UploadedFile[] | undefined> {
// 		const tempResp: UploadedFile | UploadedFile[] | undefined = undefined;

// 		return tempResp;
// 	}
// }
