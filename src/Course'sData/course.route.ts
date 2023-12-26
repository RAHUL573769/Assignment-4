import express, { NextFunction, Request, Response } from "express";
import { validationMiddleWare } from "../middlewares/validationMiddlewares";
import { CourseValidation } from "./course.validations";
import { CourseController } from "./course.controllers";

const router = express.Router();

router.post(
  "/create-course",
  validationMiddleWare(CourseValidation.CourseValidationSchema),
  CourseController.createCourse
);

router.get("/get-course", CourseController.getAllCourse);
router.get("/get-course/:id", CourseController.getSingleCourse);
export const CourseRouter = router;
