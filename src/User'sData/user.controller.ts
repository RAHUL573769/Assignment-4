import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import httpStatus from "http-status";
// import { hashPassword } from "../helpers/HashingPasswordFolder/hashingPassword";
import { IUser } from "./user.interface";
import GenericError from "../classes/errorClasses/GenericError";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import { hashPassword } from "../helpers/HashingPasswordFolder/hashingPassword";

const createUserIntoDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const hashedPassword1 = await hashPassword(userData.password);

      const finalUserData: IUser = {
        username: userData.username,
        email: userData.email,
        password: hashedPassword1 as string,
        role: userData.role
      };
      // throw new GenericError("vua", 404);
      // console.log("Final User Data From User Controller Line 22", finalUserData);
      const result = await UserServices.createUserIntoDb(finalUserData);

      // console.log("Hashed Password From User Create Controller", hashedPassword1);
      res.status(httpStatus.CREATED).json({
        message: "User Data Created",
        status: "Success",
        data: result
      });
      // console.log(
      //   "User Data From 10 number line UserController.ts",
      //   userData.password
      // );
    } catch (error) {
      // console.log("Error From User Controller Line 36", error);
      next(error);
    }
  }
);
const getUsersFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await UserServices.getAllCreatedUsersFromDb();

      res.status(httpStatus.OK).json({
        message: "User Data Retrieved",
        status: "Success",
        data: result
      });
    } catch (error) {
      // console.log("Error From User Controller Line 36", error);
      next(error);
    }
  }
);
const getSingleUserFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const result = await UserServices.getSingleDataFromDb(userId);

      res.status(httpStatus.OK).json({
        message: "User Data Retrieved",
        status: "Success",
        data: result
      });
    } catch (error) {
      // console.log("Error From User Controller Line 36", error);
      next(error);
    }
  }
);
const updateUsersFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const result = await UserServices.updateUserData(id, body);

      res.status(httpStatus.OK).json({
        message: "User Data Updated",
        status: "Success",
        data: result
      });
    } catch (error) {
      // console.log("Error From User Controller Line 36", error);
      next(error);
    }
  }
);
export const UserController = {
  createUserIntoDb,
  getUsersFromDb,
  getSingleUserFromDb,
  updateUsersFromDb
};
