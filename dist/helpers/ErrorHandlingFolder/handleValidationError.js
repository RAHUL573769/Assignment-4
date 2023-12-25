"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    const issues = Object.values(err.errors);
    let errorIssues = [];
    issues.map((errObj) => {
        errorIssues.push({
            path: errObj.path,
            message: errObj.message
        });
    });
    return {
        message: "Validation Error",
        errorCode: 400,
        issues,
        status: "Failed"
    };
};
exports.handleValidationError = handleValidationError;
