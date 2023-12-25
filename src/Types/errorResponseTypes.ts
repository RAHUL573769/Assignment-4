export type TErrorResponse = {
  message: string;
  errorCode: number;
  status: string;
  issues: TErrorIssues[];
};

export type TErrorIssues = { path: string; message: string };
