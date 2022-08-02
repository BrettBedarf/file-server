import { FileMetaBase } from "@/entities/file.entity.types";
import { NextFunction } from "express";
import { Request, Response } from "express";

/** Handlers for upload and download of files */
export interface FileController {
    postFile: (req: Request, res: Response, next:NextFunction ) => Promise<void>;
    getFile: (req: Request, res: Response, next:NextFunction) => Promise<void>;
}

export type PostFileResponse = FileMetaBase & {
    id:string,
    createdAt: number;
    updatedAt: number;

}