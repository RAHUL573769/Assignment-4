import express from "express";
import { AuthController } from "./authorization.controller";

const router = express.Router();

router.post("/register", AuthController.loginAuthController);
router.post("/login", AuthController.loginAuthController);

export const authRoutes = router;
