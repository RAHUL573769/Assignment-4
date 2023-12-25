import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../../Types/errorResponseTypes";

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError
): TErrorResponse => {
  const regex = /"(.*?)"/;
  const matches = err.message.match(regex);
  let issues: TErrorIssues[] = [
    {
      path: "",
      message: `Value is Duplicated for ${matches![1]} Field`
    }
  ];

  return {
    message: "Duplicate  Error",
    errorCode: 409,
    issues,
    status: "Failed"
  };
};
