import { Stream } from 'stream';
import { UploadedFileMeta } from '@/entities/file.entity.types';
import {
	FileUpload,
	FileMetaUpload,
	ProviderTypes,
} from '@/entities/file.entity.types';

export const mockFileUpl: FileUpload = {
	meta: {
		name: 'test',
		size: 100,
		mimeType: 'image/png',
		owner: 1,
		folderPath: ['testfolder', 'testfolder2'],
		extension: 'png',
		createdBy: 1,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	data: {} as Stream,
};

export const mockUploadedFile: FileMetaUpload = {
	...mockFileUpl.meta,
	providerType: 'test' as ProviderTypes,
};

export const mockUploadedMeta: UploadedFileMeta = {
	...mockUploadedFile,
	_id: '1',
};
