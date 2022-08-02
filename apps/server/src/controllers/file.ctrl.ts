import { NextFunction } from "express";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import {FileController as IFileController} from "./file.types.ctrl";
import { TYPES } from '@/ioc/types';
import { UploadFileUseCase } from "@/use-cases/upload-file.uc.types";

// TODO: cleaner to not couple controllers directly to express. Instead make
// generica req & res and make express-specific wrapper to convert to/from

@injectable()
class FileController implements IFileController {
    public constructor(
        @inject(TYPES.UploadFileUseCase)
        uploadFile:UploadFileUseCase
        ) {}
    async postFile(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // extract file from request

            // validate 
        } catch (error) {
            next(error);
        }
            
        }
    async getFile(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            throw new Error("Not implemented");
            
        } catch (error) {
            next(error);
        }
            
        }
}

export default FileController;