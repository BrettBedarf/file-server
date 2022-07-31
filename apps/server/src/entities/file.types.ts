export interface FileUpload {
	meta: FileMetaMain;
	data: ArrayBuffer;
}

export interface UploadedFile {
	meta: FileMetaMain & {
		id: number;
		/** provider url i.e. http://s3-us-east-1.amazonaws.com... */
		url: string;
	};
}

/**
 * Primary file source metadata. May contain alternate formats
 */
export interface FileMetaMain extends FileMetaBase {
	name: string;
	owner: number;
	/** i.e. ["folder1" , "folder2" -> "folder3" */
	folderPath: string[];
	/** i.e. folder1/folder2/folder3 */
	folderPathString: string;
	isAlt: false;
	/** alternate file formats that have been converted i.e. different sizes, types, etc */
	altFormats?: AltFileFormatMeta[];
}

interface FileMetaBase {
	extension: string;
	type: string;
	/** size in bytes */
	size: number;
	createdBy: Date;
	createdAt: Date;
	updatedAt: Date;
	isAlt: boolean;
}

interface AltFileFormatMeta extends FileMetaBase {
	mainId: number;
	isAlt: true;
}
