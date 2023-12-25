"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import httpStatus from "http-status";
// import { path } from 'path';
const globalErrorHandler = (err, req, res, next) => {
    const errorResponse = {
        message: err.message,
        errorCode: err.statusCode || 500,
        status: err.status,
        issues: err.issues || []
    };
    // let statusCode = err.statusCode || 500;
    // let message = err.message || "Something Went Wrong";
    // let status = err.status || "Failed";
    console.log("Raw Error", err);
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        console.log("Ami Validation Error");
        errorResponse.message = "Validation  Error Message";
        errorResponse.errorCode = 500;
        errorResponse.status = "Error Found";
        const errorValues = Object.values(err.errors);
        errorValues.map((errorObj) => {
            errorResponse.issues.push({
                path: errorObj.path,
                message: errorObj.message
            });
        });
    }
    res.status(errorResponse.errorCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        issues: errorResponse.issues
    });
};
exports.globalErrorHandler = globalErrorHandler;
