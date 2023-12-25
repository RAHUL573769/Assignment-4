"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constants_1 = require("./user.constants");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "User Name is Required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String
    },
    role: Object.values(user_constants_1.USER_ROLES)
});
exports.User = (0, mongoose_1.model)("User", userSchema);
