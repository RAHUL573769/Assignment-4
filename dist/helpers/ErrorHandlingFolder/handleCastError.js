"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (err) => {
    let issues = [
        {
            path: err.path,
            message: err.message
        }
    ];
    return {
        message: "Cast   Error Found",
        errorCode: 400,
        issues,
        status: "Failed"
    };
};
exports.handleCastError = handleCastError;
