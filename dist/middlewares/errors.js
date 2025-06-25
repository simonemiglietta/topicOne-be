"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, _next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: {
            name: err.name || 'InternalServerError',
            statusCode,
            message: err.message || 'Unexpected server error',
        },
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errors.js.map