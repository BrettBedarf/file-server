import 'reflect-metadata';
import { UploadFileUseCase } from '@/use-cases/upload-file.uc.types';
import UploadFile from '@/use-cases/upload-file.uc';
import { Container } from 'inversify';
import { FileUploaderRepo } from '@/repos/uploader/file-uploader.repo.types';
import { mock } from 'jest-mock-extended';
import { TYPES } from '@/ioc/types';
import { FileMetaRepo } from '@/repos/meta-storage/file-meta.repo.types';

const mockFileUploader = mock<FileUploaderRepo>();
const mockFileMetaRepo = mock<FileMetaRepo>();

const container = new Container();
container.bind(TYPES.FileUploaderRepo).toConstantValue(mockFileUploader);
container.bind<UploadFileUseCase>(TYPES.UploadFileUseCase).to(UploadFile);
container
	.bind<FileMetaRepo>(TYPES.FileMetaRepo)
	.toConstantValue(mockFileMetaRepo);

export { container, mockFileUploader, mockFileMetaRepo };
