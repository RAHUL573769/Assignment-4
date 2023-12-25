"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./UserModel/user.route");
const globalErrorHandler_1 = require("./helpers/ErrorHandlingFolder/globalErrorHandler");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", user_route_1.UserRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
