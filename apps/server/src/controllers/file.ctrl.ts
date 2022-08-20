import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { FileController as IFileController } from './file.types.ctrl';
import { TYPES } from '@/ioc/types';
import { UploadFileUseCase } from '@/use-cases/upload-file.uc.types';
import formidable from 'formidable';

// TODO: cleaner to not couple controllers directly to express. Instead make
// generica req & res and make express-specific wrapper to convert to/from

@injectable()
class FileController implements IFileController {
	public constructor(
		@inject(TYPES.UploadFileUseCase)
		uploadFile: UploadFileUseCase
	) {}
	async postFile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			// extract file from request
			// TODO: create middleware to split out file stream from rest of req.
			// treat stream like proxy and we are only interested in meta
			const form = formidable({});
			form.parse(req, (err, fields, files) => {
				// validate meta
				files;
			});
		} catch (error) {
			next(error);
		}
	}
	async getFile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			throw new Error('Not implemented');
		} catch (error) {
			next(error);
		}
	}
}

export default FileController;
