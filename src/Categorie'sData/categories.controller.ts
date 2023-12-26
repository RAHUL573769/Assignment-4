import { NextFunction, Request, Response } from "express";
import { Categories } from "./categories.model";
import { CategoryServices } from "./categories.services";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
};

const retrieveAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryServices.receiveASingleCategory();
    res.status(200).json({
      message: "Categories Data Created",
      data: result,
      success: "Success"
    });
  } catch (error) {
    next(error);
  }
};
export const CategoriesController = { createCategory, retrieveAllCategories };
