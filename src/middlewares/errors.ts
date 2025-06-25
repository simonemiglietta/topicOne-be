import {NextFunction, Request, Response} from 'express';

export const errorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: {
            name: err.name || 'InternalServerError',
            statusCode,
            message: err.message || 'Unexpected server error',
        },
    });
};
