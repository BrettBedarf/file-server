import connectDb from '@/config/db';
import container from '../../ioc/inversify-config';
import { TYPES } from '../../ioc/types';
import FileMetaModel from './file-meta-model.repo';
import { FileMetaRepo } from './file-meta.repo.types';
import { mockFileUploadMeta } from './__mocks__/mock-file-upload-meta';

beforeAll(async () => {
	// connect to db
	process.env.MONGO_URI = 'mongodb://localhost:27017/file-server-TEST';
	await connectDb();
});

beforeEach(() => {});

afterEach(async () => {
	// clear db
	await FileMetaModel.deleteMany({});
});

afterAll(async () => {
	// close db connection
	await FileMetaModel.db.close();
});

describe('Mongo file meta repo', () => {
	it('should insert file meta', async () => {
		const fileMetaRepo = container.get<FileMetaRepo>(TYPES.FileMetaRepo);
		const insertedMeta = await fileMetaRepo.insert(mockFileUploadMeta);
		const { _id } = insertedMeta;
		const findResp = await FileMetaModel.findById(insertedMeta._id);
		expect(findResp).toBeDefined();
	});
});
