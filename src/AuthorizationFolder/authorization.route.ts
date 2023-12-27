import express from "express";
import { AuthController } from "./authorization.controller";

const router = express.Router();

router.post("/register", AuthController.registerAuthController);
router.post("/login", AuthController.loginAuthController);

export const authRoutes = router;
