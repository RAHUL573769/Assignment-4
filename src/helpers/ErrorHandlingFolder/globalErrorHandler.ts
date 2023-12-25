import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "../../Types/errorResponseTypes";
import { handleValidationError } from "./handleValidationError";
import { handleDuplicateError } from "./handleDuplicateError";
import { handleCastError } from "./handleCastError";
import { handleGenericError } from "./handleGenericError";
import config from "../../config";
// import httpStatus from "http-status";
// import { path } from 'path';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorResponse: TErrorResponse = {
    message: err.message,
    errorCode: err.statusCode || 500,
    status: err.status,
    issues: err.issues || []
  };
  // let statusCode = err.statusCode || 500;
  // let message = err.message || "Something Went Wrong";
  // let status = err.status || "Failed";
  // console.log("Raw Error", err);

  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");

    errorResponse = handleValidationError(err);
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
  } else if (err.code && err.code === 11000) {
    errorResponse = handleDuplicateError(err);
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
  } else if (err instanceof mongoose.Error.CastError) {
    // errorResponse.issues = [{ path: err.path, message: err.message }];
    errorResponse = handleCastError(err);
  } else if (err instanceof Error) {
    errorResponse = handleGenericError(err);
  }
  res.status(errorResponse.errorCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    stack: config.node_env === "developement" ? err.stack : undefined,
    issues: errorResponse.issues
  });
};
