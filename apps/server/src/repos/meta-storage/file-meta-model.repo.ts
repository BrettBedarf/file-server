import { Schema, model, connect } from 'mongoose';
import { FileMetaUpload, ProviderTypes } from '@/entities/file.entity.types';

// create mongoose schema for FileMetaUpload interface

const fileMetaUploadSchema = new Schema<FileMetaUpload>({
	name: { type: String, required: true },
	owner: { type: Number, required: true },
	folderPath: { type: [String], required: true },
	extension: { type: String, required: true },
	mimeType: { type: String, required: true },
	size: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	providerType: { type: String, enum: ProviderTypes, required: true },
	providerId: { type: String, required: false },
});

const FileMetaModel = model<FileMetaUpload>('FileMeta', fileMetaUploadSchema);

export default FileMetaModel;
