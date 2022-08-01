import 'reflect-metadata'; // needed because class has inversify decorator even though we aren't using in this test
import { FileUploaderRepo } from './file-uploader.repo.types';
import { mockFileUpl } from '@/use-cases/__mocks__/mock-files';
import fs from 'fs';
import { PassThrough, Stream } from 'stream';
import { resolve } from 'path';
import FsFileUploader from './fs-file-uploader.repo';

jest.mock('fs');
const mockCreateWriteStream = fs.createWriteStream as jest.MockedFunction<
	typeof fs.createWriteStream
>;

const LOCAL_PATH_PREFIX = './storage'; //we will never use this provider in prod so okay to hardcode relative to cwd for now

const mockEvents = (stream: Stream) => {
	setTimeout(() => {
		stream.emit('data', 'hello');
		stream.emit('data', 'goodbye');
		stream.emit('end');
	});
};

describe('Filesystem uploader repo', () => {
	let fileUploader: FileUploaderRepo;
	let mockReadable: fs.ReadStream;
	let mockWritable: fs.WriteStream;

	beforeEach(() => {
		fileUploader = new FsFileUploader(LOCAL_PATH_PREFIX);
		mockReadable = new PassThrough() as unknown as fs.ReadStream;
		mockWritable = new PassThrough() as unknown as fs.WriteStream;
		mockCreateWriteStream.mockReturnValueOnce(mockWritable);
	});

	afterEach(() => {});

	test('writes a file stream to disk', async () => {
		const returnProm = fileUploader.upload({
			...mockFileUpl,
			data: mockReadable,
		});

		mockEvents(mockReadable);

		// assert that the finish event was emitted
		let finishEmitted = false;
		let endEmitted = false;
		let closeEmitted = false;

		mockWritable.on('finish', () => {
			finishEmitted = true;
		});
		mockWritable.on('end', () => {
			endEmitted = true;
		});
		mockWritable.on('close', () => {
			closeEmitted = true;
		});

		await returnProm;

		expect(finishEmitted || endEmitted || closeEmitted).toBe(true);
	});

	test('writes to correct path', async () => {
		const testPath = 'test/path';
		const { meta, data } = mockFileUpl;
		const { folderPath, ...restMeta } = meta;
		const file = {
			data: mockReadable,
			meta: { ...restMeta, folderPath: testPath.split('/') },
		};

		const uplRespProm = fileUploader.upload(file);

		mockEvents(mockReadable);

		const uplResp = await uplRespProm;
		const expectedPath = resolve(`${LOCAL_PATH_PREFIX}/${testPath}`);

		expect(mockCreateWriteStream).toHaveBeenCalledWith(expectedPath);
	});
});
