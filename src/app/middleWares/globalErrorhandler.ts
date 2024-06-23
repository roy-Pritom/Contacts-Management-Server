/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorhandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = "Something went wrong";
    if(err instanceof AppError){
        statusCode=err.statusCode;
        message=err.message
    }
    return res.status(statusCode).json({
        success:false,
        message,
        err
    })
}

export default globalErrorhandler;