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
exports.AuthServices = void 0;
const user_model_1 = require("../User'sData/user.model");
const hashingPassword_1 = require("../helpers/HashingPasswordFolder/hashingPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginAuthServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Payload from Login Services",payload);
    const user = yield user_model_1.User.findOne({ email: payload.email });
    // console.log("User FROM Authorization Services", user);
    if (!user) {
        throw new Error("Invalid Credentials");
    }
    const jwtPayLoad = { email: user.email, role: user.role };
    const token = jsonwebtoken_1.default.sign(jwtPayLoad, "tour-secret", {
        expiresIn: "10d"
    });
    console.log("Token From Auth Services", token);
    return { token };
});
const registerAuthServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("From Register Services Payload is", payload);
    const password = payload.password;
    const hashedPassword = yield (0, hashingPassword_1.hashPassword)(password);
    //   console.log("Hashpassword From Auth Services", hashPassword);
    const result = yield user_model_1.User.create(Object.assign(Object.assign({}, payload), { password: hashedPassword, role: "user" }));
    //   console.log("Result Output From Register Auth Services", result);
    return result;
});
const changePasswordAuthServices = (decoded, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(decoded);
    console.log(payload);
});
exports.AuthServices = {
    loginAuthServices,
    registerAuthServices,
    changePasswordAuthServices
};
