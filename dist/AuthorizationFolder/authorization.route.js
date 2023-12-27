"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authorization_controller_1 = require("./authorization.controller");
const router = express_1.default.Router();
router.post("/register", authorization_controller_1.AuthController.loginAuthController);
router.post("/login", authorization_controller_1.AuthController.loginAuthController);
exports.authRoutes = router;
