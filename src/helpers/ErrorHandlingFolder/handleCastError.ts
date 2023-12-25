import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../../Types/errorResponseTypes";

export const handleCastError = (
  err: mongoose.Error.CastError
): TErrorResponse => {
  let issues: TErrorIssues[] = [
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
