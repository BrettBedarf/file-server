import { Stream } from 'stream';

export interface FileUpload {
	meta: FileMetaBase;
	data: Stream;
}

/** Provider-specific metadata after file upload. Stored in db along with other
 * meta and used to locate and download. */
type ProviderMeta = {
	providerType: ProviderTypes;
	providerId?: number;
};

/** All data needed to save meta to db after uploading file to provider */
export type FileMetaUpload = FileMetaBase & ProviderMeta;

/** Response from stored file meta including db id */
export type UploadedFileMeta = FileMetaUpload & {
	/** database ID */
	_id: number;
};
/**
 * Primary file source metadata
 */
export interface FileMetaBase {
	name: string;
	owner: number;
	/** i.e. ["folder1" , "folder2" -> "folder3" */
	folderPath: string[];
	extension: string;
	mimeType: string;
	/** size in bytes */
	size: number;
	createdBy: number;
	createdAt: Date;
	updatedAt: Date;
}

/** Allowed providers. Need to be explicit since we can't try to d/l a file
 * saved to a different provider*/
export enum ProviderTypes {
	S3 = 's3',
	FS = 'fs',
}

// interface AltFileFormatMeta extends FileMetaBase {
// 	mainId: number;
// 	isAlt: true;
// }
