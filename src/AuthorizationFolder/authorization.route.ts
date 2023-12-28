import express from "express";
import { AuthController } from "./authorization.controller";
import { checkAuth } from "../middlewares/authMiddlewares";
import { USER_ROLES } from "../User'sData/user.constants";

const router = express.Router();

router.post("/register", AuthController.registerAuthController);
router.post("/login", AuthController.loginAuthController);
router.patch(
  "/change-password",
  checkAuth(USER_ROLES.admin),
  AuthController.changePasswordAuthController
);
export const authRoutes = router;
