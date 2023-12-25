import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject } from "zod";
import { ZodValidation } from "./user.validations";
import { validationMiddleWare } from "../middlewares/validationMiddlewares";

const router = express.Router();

router.post(
  "/create-user",
  validationMiddleWare(ZodValidation.createUserValidation),
  UserController.createUserIntoDb
);

export const UserRouter = router;
