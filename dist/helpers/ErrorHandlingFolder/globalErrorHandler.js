"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        message: "From Global Error Handler",
        error: err,
        status: "Fail"
    });
};
exports.globalErrorHandler = globalErrorHandler;
