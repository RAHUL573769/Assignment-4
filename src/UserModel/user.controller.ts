import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import httpStatus from "http-status";
import { hashPassword } from "../helpers/HashingPasswordFolder/hashingPassword";
import { IUser } from "./user.interface";

const createUserIntoDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const hashedPassword1 = await hashPassword(userData.password);

    const finalUserData: IUser = {
      username: userData.username,
      email: userData.email,
      password: hashedPassword1,
      role: userData.role
    };
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
};

export const UserController = { createUserIntoDb };
