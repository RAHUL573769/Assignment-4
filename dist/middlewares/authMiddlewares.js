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
const user_model_1 = require("../User'sData/user.model");
const checkAuth = (...roles) => {
    console.log(roles);
    return (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        // console.log("Token From Auth Middleware", token);
        if (!token) {
            throw new Error("User Token Not Found");
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, "tour-secret");
        console.log("Decoded Token For Jwt Verify", decodedToken);
        const { email, role } = decodedToken;
        if (!role) {
            throw new Error("Invalid Email in Decoded Email");
        }
        const user = yield user_model_1.User.findOne({ role }).select("+password");
        if (!user) {
            throw new Error("Invalid User");
        }
        // console.log(!roles.includes(user?.role));
        // if (!roles.includes(user?.role)) {
        //   throw new Error("Invalid User Privilages");
        // }
        next();
    }));
};
exports.checkAuth = checkAuth;
