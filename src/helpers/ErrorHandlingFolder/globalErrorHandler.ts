import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "../../Types/errorResponseTypes";
// import httpStatus from "http-status";
// import { path } from 'path';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorResponse: TErrorResponse = {
    message: err.message,
    errorCode: err.statusCode || 500,
    status: err.status,
    issues: err.issues || []
  };
  // let statusCode = err.statusCode || 500;
  // let message = err.message || "Something Went Wrong";
  // let status = err.status || "Failed";
  console.log("Raw Error", err);

  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");
    errorResponse.message = "Validation  Error Message";
    errorResponse.errorCode = 500;
    errorResponse.status = "Error Found";
    const errorValues = Object.values(err.errors);
    errorValues.map(
      (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errorObj.path,
          message: errorObj.message
        });
      }
    );
  }
  res.status(errorResponse.errorCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    issues: errorResponse.issues
  });
};
