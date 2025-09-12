import { Request, Response, NextFunction } from "express";

const errorhandler = (err: any, req: Request, res: Response ,next: NextFunction)=>{
    console.error(err);

    const statusCode  = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
        errors: err.errors || null
    })
}

export default errorhandler