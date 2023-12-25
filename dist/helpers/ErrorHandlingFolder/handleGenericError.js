"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
const handleGenericError = (err) => {
    let issues = [
        {
            path: "",
            message: err.message
        }
    ];
    return {
        message: "Unknown Error Found",
        errorCode: 400,
        issues,
        status: "Failed"
    };
};
exports.handleGenericError = handleGenericError;
