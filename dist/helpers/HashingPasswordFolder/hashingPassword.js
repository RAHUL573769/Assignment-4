"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const argon2 = __importStar(require("argon2"));
// Hashing password
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashedPassword = yield argon2.hash(password);
            // console.log("From HashPassword MiddleWare", hashedPassword);
            return hashedPassword;
        }
        catch (error) {
            // console.error("Error hashing password:", hashPassword);
            throw error;
        }
    });
}
exports.hashPassword = hashPassword;
// Verifying password
function verifyPassword(hashedPassword, inputPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isPasswordValid = yield argon2.verify(hashedPassword, inputPassword);
            return isPasswordValid;
        }
        catch (error) {
            console.error("Error verifying password d From hashing password Folder:", error);
            throw error;
        }
    });
}
exports.verifyPassword = verifyPassword;
// Example usage
(() => __awaiter(void 0, void 0, void 0, function* () {
    const passwordToHash = "your_password";
    try {
        // Hash the password
        const hashedPassword = yield hashPassword(passwordToHash);
        console.log("Hashed Password  From hashing password Folder:", hashedPassword);
        // Verify the password
        const isPasswordValid = yield verifyPassword(hashedPassword, "user_input_password");
        // console.log("Is Password Valid?", isPasswordValid);
    }
    catch (error) {
        console.error("An error occurred From hashing password Folder:", error);
    }
}))();
