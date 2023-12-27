import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./authorization.services";

const loginAuthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = AuthServices.loginAuthServices(req.body);
  console.log(result);
};

const registerAuthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = AuthServices.registerAuthServices(req.body);
  res.status(200).json({
    message: "User Registered Successfully ",
    status: "Success",
    data: result
  });
};

export const AuthController = { loginAuthController, registerAuthController };
