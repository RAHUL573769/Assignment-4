export type TErrorResponse = {
  message: string;
  errorCode: number;
  status: string;
  issues: [{ path: string; message: string }];
};
