import { NextFunction, Request, Response } from "express";

const loginAuthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const registerAuthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const AuthController = { loginAuthController, registerAuthController };
