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

router.get("/get-user", UserController.getUsersFromDb);
router.get("/get-user/:id", UserController.getSingleUserFromDb);
router.put("/update-user/:id", UserController.updateUsersFromDb);
export const UserRouter = router;
