"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError_1 = require("./handleValidationError");
const handleDuplicateError_1 = require("./handleDuplicateError");
const handleCastError_1 = require("./handleCastError");
const handleGenericError_1 = require("./handleGenericError");
const config_1 = __importDefault(require("../../config"));
// import httpStatus from "http-status";
// import { path } from 'path';
const globalErrorHandler = (err, req, res, next) => {
    let errorResponse = {
        message: err.message,
        errorCode: err.statusCode || 500,
        status: err.status,
        issues: err.issues || []
    };
    // let statusCode = err.statusCode || 500;
    // let message = err.message || "Something Went Wrong";
    // let status = err.status || "Failed";
    // console.log("Raw Error", err);
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        console.log("Ami Validation Error");
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
        // errorResponse.message = "Validation  Error Message";
        // errorResponse.errorCode = 500;
        // errorResponse.status = "Error Found";
        // const errorValues = Object.values(err.errors);
        // errorValues.map(
        //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     errorResponse.issues.push({
        //       path: errorObj.path,
        //       message: errorObj.message
        //     });
        //   }
        // );
    }
    else if (err.code && err.code === 11000) {
        errorResponse = (0, handleDuplicateError_1.handleDuplicateError)(err);
        // const regex = /"(.*?)"/;
        // const matches = err.message.match(regex);
        // console.log("Error from line 42", err.message);
        // errorResponse.message = "Duplicate Error Message";
        // errorResponse.errorCode = 409;
        // errorResponse.status = "Error Found";
        // const errorValues = Object.values(err.errors);
        // errorResponse.issues = [
        //   {
        //     path: "",
        //     message: `Value is Duplicated for ${matches![1]} Field`
        //   }
        // ];
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        // errorResponse.issues = [{ path: err.path, message: err.message }];
        errorResponse = (0, handleCastError_1.handleCastError)(err);
    }
    else if (err instanceof Error) {
        errorResponse = (0, handleGenericError_1.handleGenericError)(err);
    }
    res.status(errorResponse.errorCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        stack: config_1.default.node_env === "developement" ? err.stack : undefined,
        issues: errorResponse.issues
    });
};
exports.globalErrorHandler = globalErrorHandler;
