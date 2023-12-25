import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validationMiddleWare = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await schema.safeParseAsync(data);
    if (!result.success) {
      //   console.log("Error From Validate MiddleWare", result.error);
      next(result.error);
    } else {
      req.body = result.data;
      next();
    }
  };
};
