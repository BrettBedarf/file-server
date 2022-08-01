import container from '@/ioc/inversify-config';
import { TYPES } from '@/ioc/types';
import { FileUpload } from '@/entities/file.entity.types';
import { UploadFileUseCase } from './upload-file.uc.types';

const uploadFiles = container.get<UploadFileUseCase>(TYPES.UploadFileUseCase);

const files = [{}] as FileUpload[];

uploadFiles.upload(files);
