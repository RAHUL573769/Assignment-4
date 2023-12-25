"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    const regex = /"(.*?)"/;
    const matches = err.message.match(regex);
    let issues = [
        {
            path: "",
            message: `Value is Duplicated for ${matches[1]} Field`
        }
    ];
    return {
        message: "Duplicate  Error",
        errorCode: 409,
        issues,
        status: "Failed"
    };
};
exports.handleDuplicateError = handleDuplicateError;
