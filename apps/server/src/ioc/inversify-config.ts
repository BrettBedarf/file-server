import 'reflect-metadata';
import { FileUploaderRepo } from '@/repos/uploader/file-uploader.repo.types';
import UploadFile from '@/use-cases/upload-file.uc';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UploadFileUseCase } from '../use-cases/upload-file.uc.types';
import FsFileUploader from '@/repos/uploader/fs-file-uploader.repo';
import FileMetaModel from '@/repos/meta-storage/file-meta-model.repo';
import { FileMetaUpload } from '@/entities/file.entity.types';
import { Model } from 'mongoose';
import MongoFileMetaRepo from '@/repos/meta-storage/mongo-file-meta.repo';
import { FileMetaRepo } from '@/repos/meta-storage/file-meta.repo.types';

// fs provider needs to be instance because has non-injected (optional) param
const fsUploader = new FsFileUploader();

const container = new Container();
container
	.bind<FileUploaderRepo>(TYPES.FileUploaderRepo)
	.toConstantValue(fsUploader);
container.bind<UploadFileUseCase>(TYPES.UploadFileUseCase).to(UploadFile);
container
	.bind<Model<FileMetaUpload>>(TYPES.FileMetaMongoModel)
	.toConstantValue(FileMetaModel);
container.bind<FileMetaRepo>(TYPES.FileMetaRepo).to(MongoFileMetaRepo);

export default container;
