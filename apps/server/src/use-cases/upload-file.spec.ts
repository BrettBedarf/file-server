import { mock, mockClear, mockReset } from 'jest-mock-extended';
import { UploadFileUseCase } from './upload-file.uc.types';
import {
	mockFileUpl,
	mockUploadedFile,
	mockUploadedMeta,
} from './__mocks__/mock-files';
import { TYPES } from '@/ioc/types';
import {
	mockFileUploader,
	mockFileMetaRepo,
	container,
} from './__mocks__/mock-ioc';

describe('Upload file use case', () => {
	let uplFileUC: UploadFileUseCase;

	beforeEach(() => {
		container.snapshot();
		mockReset(mockFileUploader);
		uplFileUC = container.get<UploadFileUseCase>(TYPES.UploadFileUseCase);
	});

	afterEach(() => {
		container.restore();
	});

	test('Uploads a file', async () => {
		mockFileUploader.upload.mockReturnValue(
			Promise.resolve(mockUploadedFile)
		);
		mockFileMetaRepo.insert.mockReturnValue(
			Promise.resolve(mockUploadedMeta)
		);

		uplFileUC.upload(mockFileUpl);
		expect(mockFileUploader.upload).toBeCalled();
	});
	test('Writes file meta to db', async () => {
		mockFileUploader.upload.mockReturnValue(
			Promise.resolve(mockUploadedFile)
		);
		mockFileMetaRepo.insert.mockReturnValue(
			Promise.resolve(mockUploadedMeta)
		);
		uplFileUC.upload(mockFileUpl);
		expect(mockFileUploader.upload).toBeCalled();
	});
});
