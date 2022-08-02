import { FileMetaUpload } from '@/entities/file.entity.types';
import { ProviderTypes } from '../../../entities/file.entity.types';

export const mockFileUploadMeta: FileMetaUpload = {
	name: 'test',
	size: 100,
	mimeType: 'image/png',
	owner: 1,
	folderPath: ['testfolder', 'testfolder2'],
	extension: 'png',
	createdBy: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
	providerType: ProviderTypes.FS,
};
