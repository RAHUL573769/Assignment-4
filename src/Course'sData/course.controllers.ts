import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import { CourseServices } from "./course.services";
import httpStatus from "http-status";

const createCourse = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCourse = req.body;
      const result = await CourseServices.createCourseIntoDb(newCourse);
      res.status(httpStatus.CREATED).json({
        message: "Course Created",
        status: "Success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
);
const getAllCourse = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CourseServices.getCourseFromDb();
      res.status(httpStatus.OK).json({
        message: "Get Course Data ",
        status: "Success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
);
const getSingleCourse = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await CourseServices.getSingleCourseFromDb(id);
      res.status(httpStatus.OK).json({
        message: "Single Course Data Fetched",
        status: "Success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
);
export const CourseController = { createCourse, getAllCourse, getSingleCourse };
