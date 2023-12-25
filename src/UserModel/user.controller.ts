import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import httpStatus from "http-status";

const createUserIntoDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDb(userData);
    res.status(httpStatus.CREATED).json({
      message: "User Data Created",
      status: "Success",
      data: result
    });
    console.log("User Data From 10 number line UserController.ts", userData);
  } catch (error) {
    console.log(error);
  }
};

export const UserController = { createUserIntoDb };
