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
exports.checkAuth = void 0;
const catchAsyncFunction_1 = require("../helpers/CatchAsyccFunction/catchAsyncFunction");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../User'sData/user.model");
const checkAuth = (...roles) => {
    return (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            //   console.log("Token From Auth Middleware", token);
            if (!token) {
                throw new Error("User Token Not Found");
            }
            const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET);
            const { email, role } = decodedToken;
            if (!email) {
                throw new Error("Invalid Email in Decoded Email");
            }
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new Error("Invalid User");
            }
            if (!roles.includes(user === null || user === void 0 ? void 0 : user.role)) {
                throw new Error("Invalid User Privilages");
            }
        }
        catch (error) {
            next(error);
        }
    }));
};
exports.checkAuth = checkAuth;
