import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../../Types/errorResponseTypes";

export const handleGenericError = (err: Error): TErrorResponse => {
  let issues: TErrorIssues[] = [
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
