"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authorization_controller_1 = require("./authorization.controller");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const user_constants_1 = require("../User'sData/user.constants");
const router = express_1.default.Router();
router.post("/register", authorization_controller_1.AuthController.registerAuthController);
router.post("/login", authorization_controller_1.AuthController.loginAuthController);
router.patch("/change-password", (0, authMiddlewares_1.checkAuth)(user_constants_1.USER_ROLES.admin), authorization_controller_1.AuthController.changePasswordAuthController);
exports.authRoutes = router;
