import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../../Types/errorResponseTypes";

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): TErrorResponse => {
  const issues = Object.values(err.errors);

  let errorIssues: TErrorIssues[] = [];
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
