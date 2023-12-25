"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validations_1 = require("./user.validations");
const router = express_1.default.Router();
const validationMiddleWare = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        const result = yield schema.safeParseAsync(data);
        if (!result.success) {
            console.log("Error From Validate MiddleWare", result.error);
        }
        else {
            req.body = result.data;
        }
    });
};
router.post("/create-user", validationMiddleWare(user_validations_1.ZodValidation.createUserValidation), user_controller_1.UserController.createUserIntoDb);
exports.UserRouter = router;
