"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(model, id) {
        const message = id
            ? `${model} with id '${id}' not found`
            : `${model} not found`;
        super(message);
        this.name = 'NotFoundException';
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=notfound.exception.js.map