"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validations_1 = require("./user.validations");
const validationMiddlewares_1 = require("../middlewares/validationMiddlewares");
const router = express_1.default.Router();
router.post("/create-user", (0, validationMiddlewares_1.validationMiddleWare)(user_validations_1.ZodValidation.createUserValidation), user_controller_1.UserController.createUserIntoDb);
router.get("/get-user", user_controller_1.UserController.getUsersFromDb);
router.get("/get-user/:id", user_controller_1.UserController.getSingleUserFromDb);
router.put("/update-user/:id", user_controller_1.UserController.updateUsersFromDb);
exports.UserRouter = router;
