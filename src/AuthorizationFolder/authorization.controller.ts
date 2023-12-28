import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./authorization.services";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import jwt, { JwtPayload } from "jsonwebtoken";

const loginAuthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const result = await AuthServices.loginAuthServices(req.body);
  res.status(200).json({
    message: "User Logged In Successfully ",
    status: "Success",
    data: result
  });
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

const changePasswordAuthController = catchAsync(
  async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(
      token as string,
      "tour-secret"
    ) as JwtPayload;

    const result = await AuthServices.changePasswordAuthServices(
      decodedToken,
      req.body
    );
  }
);

export const AuthController = {
  loginAuthController,
  registerAuthController,
  changePasswordAuthController
};
