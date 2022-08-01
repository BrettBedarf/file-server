import 'reflect-metadata';
import { FileUploaderRepo } from '@/repos/file-uploader.repo.types';
import FsFileUploader from '@/repos/fs-file-uploader.repo';
import UploadFile from '@/use-cases/upload-file.uc';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';

const container = new Container();
container.bind<FileUploaderRepo>(TYPES.FileUploaderRepo).to(FsFileUploader);
container.bind<UploadFileUseCase>(TYPES.UploadFileUseCase).to(UploadFile);
export default container;
