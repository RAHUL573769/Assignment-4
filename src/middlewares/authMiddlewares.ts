import { NextFunction, Request, Response } from "express";
import { USER_ROLES } from "../User'sData/user.constants";
import { catchAsync } from "../helpers/CatchAsyccFunction/catchAsyncFunction";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../User'sData/user.model";

export const checkAuth = (...roles: Array<keyof typeof USER_ROLES>) => {
  console.log(roles);
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // console.log("Token From Auth Middleware", token);
    if (!token) {
      throw new Error("User Token Not Found");
    }
    const decodedToken = jwt.verify(token, "tour-secret");
    console.log("Decoded Token For Jwt Verify", decodedToken);
    const { email, role } = decodedToken as JwtPayload;

    if (!role) {
      throw new Error("Invalid Email in Decoded Email");
    }
    const user = await User.findOne({ role }).select("+password");

    if (!user) {
      throw new Error("Invalid User");
    }
    // console.log(!roles.includes(user?.role));
    // if (!roles.includes(user?.role)) {
    //   throw new Error("Invalid User Privilages");
    // }

    next();
  });
};
