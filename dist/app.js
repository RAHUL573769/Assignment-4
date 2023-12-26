"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./User'sData/user.route");
const globalErrorHandler_1 = require("./helpers/ErrorHandlingFolder/globalErrorHandler");
const categories_routes_1 = require("./Categorie'sData/categories.routes");
const course_route_1 = require("./Course'sData/course.route");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", user_route_1.UserRouter);
app.use("/api", categories_routes_1.CategoriesRouter);
app.use("/api", course_route_1.CourseRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
