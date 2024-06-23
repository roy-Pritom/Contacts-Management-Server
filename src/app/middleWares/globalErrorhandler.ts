/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";
import handleDuplicateError from "../error/handleDuplicateError";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorhandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = "Something went wrong";
    if(err instanceof AppError){
        statusCode=err.statusCode;
        message=err.message
    }
    else if(err?.code===11000){
        const customizeError = handleDuplicateError(err);
        // errorMessage = customizeError.errorMessage
        message = customizeError.errorMessage
        statusCode = customizeError.statusCode
    }
    return res.status(statusCode).json({
        success:false,
        message,
        err
    })
}

export default globalErrorhandler;