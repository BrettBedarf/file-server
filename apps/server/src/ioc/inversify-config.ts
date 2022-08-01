import 'reflect-metadata';
import { FileUploaderRepo } from '@/repos/uploader/file-uploader.repo.types';
import UploadFile from '@/use-cases/upload-file.uc';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';
import FsFileUploader from '@/repos/uploader/fs-file-uploader.repo';

// fs provider needs to be instance because has non-injected (optional) param
const fsUploader = new FsFileUploader();

const container = new Container();
container
	.bind<FileUploaderRepo>(TYPES.FileUploaderRepo)
	.toConstantValue(fsUploader);
container.bind<UploadFileUseCase>(TYPES.UploadFileUseCase).to(UploadFile);
export default container;
