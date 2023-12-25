import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject } from "zod";
import { ZodValidation } from "./user.validations";

const router = express.Router();

const validationMiddleWare = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await schema.safeParseAsync(data);
    if (!result.success) {
      console.log("Error From Validate MiddleWare", result.error);
    } else {
      req.body = result.data;
    }
  };
};

router.post(
  "/create-user",
  validationMiddleWare(ZodValidation.createUserValidation),
  UserController.createUserIntoDb
);

export const UserRouter = router;
