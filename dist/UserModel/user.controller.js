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
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const http_status_1 = __importDefault(require("http-status"));
const hashingPassword_1 = require("../helpers/HashingPasswordFolder/hashingPassword");
const createUserIntoDb = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const hashedPassword1 = yield (0, hashingPassword_1.hashPassword)(userData.password);
        const finalUserData = {
            username: userData.username,
            email: userData.email,
            password: hashedPassword1,
            role: userData.role
        };
        // console.log("Final User Data From User Controller Line 22", finalUserData);
        const result = yield user_services_1.UserServices.createUserIntoDb(finalUserData);
        // console.log("Hashed Password From User Create Controller", hashedPassword1);
        res.status(http_status_1.default.CREATED).json({
            message: "User Data Created",
            status: "Success",
            data: result
        });
        // console.log(
        //   "User Data From 10 number line UserController.ts",
        //   userData.password
        // );
    }
    catch (error) {
        // console.log("Error From User Controller Line 36", error);
        next(error);
    }
});
exports.UserController = { createUserIntoDb };
