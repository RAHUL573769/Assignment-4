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
exports.CourseController = void 0;
const catchAsyncFunction_1 = require("../helpers/CatchAsyccFunction/catchAsyncFunction");
const course_services_1 = require("./course.services");
const http_status_1 = __importDefault(require("http-status"));
const createCourse = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCourse = req.body;
        const result = yield course_services_1.CourseServices.createCourseIntoDb(newCourse);
        res.status(http_status_1.default.CREATED).json({
            message: "Course Created",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
}));
const getAllCourse = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_services_1.CourseServices.getCourseFromDb();
        res.status(http_status_1.default.OK).json({
            message: "Get Course Data ",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
}));
const getSingleCourse = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield course_services_1.CourseServices.getSingleCourseFromDb(id);
        res.status(http_status_1.default.OK).json({
            message: "Single Course Data Fetched",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.CourseController = { createCourse, getAllCourse, getSingleCourse };
