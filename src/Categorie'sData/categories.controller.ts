import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import { CategoryServices } from "./categories.services";

const createCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCategory = req.body;
      const result = await CategoryServices.createACategory(newCategory);
      console.log("Data from Categories Controllers", result);
      res.status(200).json({
        message: "Categories Data Created",
        data: result,
        success: "Success"
      });
    } catch (error) {
      next(error);
    }
  }
);

const retrieveAllCategories = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CategoryServices.receiveAllSingleCategory();
      res.status(200).json({
        message: "Categories Data Created",
        data: result,
        success: "Success"
      });
    } catch (error) {
      next(error);
    }
  }
);
const retrieveSingleCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CategoryServices.receiveAllSingleCategory();
      res.status(200).json({
        message: "Categories Data Created",
        data: result,
        success: "Success"
      });
    } catch (error) {
      next(error);
    }
  }
);
export const CategoriesController = { createCategory, retrieveAllCategories };
