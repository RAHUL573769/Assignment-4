import express, { NextFunction, Request, Response } from "express";
import { validationMiddleWare } from "../middlewares/validationMiddlewares";
import { CategoriesValidation } from "./categories.validations";
import { CategoriesController } from "./categories.controller";
import { checkAuth } from "../middlewares/authMiddlewares";

const router = express.Router();

router.post(
  "/create-categories",
  checkAuth(),
  validationMiddleWare(CategoriesValidation.createCategoriesValidation),
  CategoriesController.createCategory
);

router.get("/get-categories", CategoriesController.retrieveAllCategories);
// router.get("/get-user/:id", UserController.getSingleUserFromDb);
// router.put("/update-user/:id", UserController.updateUsersFromDb);
export const CategoriesRouter = router;
