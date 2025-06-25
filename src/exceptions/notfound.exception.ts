export class NotFoundException extends Error {
    statusCode: number;

    constructor(model: string, id?: string | number) {
        const message = id
            ? `${model} with id '${id}' not found`
            : `${model} not found`;

        super(message);
        this.name = 'NotFoundException';
        this.statusCode = 404;

        Error.captureStackTrace(this, this.constructor); 
    }
}
