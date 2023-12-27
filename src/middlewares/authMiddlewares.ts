import { NextFunction, Request, Response } from "express";
import { USER_ROLES } from "../User'sData/user.constants";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../User'sData/user.model";

export const checkAuth = (...roles: Array<keyof typeof USER_ROLES>) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      //   console.log("Token From Auth Middleware", token);
      if (!token) {
        throw new Error("User Token Not Found");
      }
      const decodedToken = jwt.verify(token, config.JWT_SECRET);
      const { email, role } = decodedToken as JwtPayload;

      if (!email) {
        throw new Error("Invalid Email in Decoded Email");
      }
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Invalid User");
      }
      if (!roles.includes(user?.role)) {
        throw new Error("Invalid User Privilages");
      }
    } catch (error) {
      next(error);
    }
  });
};
