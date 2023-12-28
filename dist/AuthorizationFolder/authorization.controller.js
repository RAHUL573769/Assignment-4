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
exports.AuthController = void 0;
const authorization_services_1 = require("./authorization.services");
const catchAsyncFunction_1 = require("../helpers/CatchAsyccFunction/catchAsyncFunction");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginAuthController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield authorization_services_1.AuthServices.loginAuthServices(req.body);
    res.status(200).json({
        message: "User Logged In Successfully ",
        status: "Success",
        data: result
    });
});
const registerAuthController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = authorization_services_1.AuthServices.registerAuthServices(req.body);
    res.status(200).json({
        message: "User Registered Successfully ",
        status: "Success",
        data: result
    });
});
const changePasswordAuthController = (0, catchAsyncFunction_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    const decodedToken = jsonwebtoken_1.default.verify(token, "tour-secret");
    const result = yield authorization_services_1.AuthServices.changePasswordAuthServices(decodedToken, req.body);
}));
exports.AuthController = {
    loginAuthController,
    registerAuthController,
    changePasswordAuthController
};
