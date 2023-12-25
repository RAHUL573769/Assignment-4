"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const user_constants_1 = require("./user.constants");
exports.createUserValidation = zod_1.default.object({
    username: zod_1.default.string({ required_error: "User Name is Required" }),
    email: zod_1.default.string({ required_error: "Email is Needed" }),
    password: zod_1.default.string(),
    role: zod_1.default.enum([...user_constants_1.USER_ROLES_Validations])
});
