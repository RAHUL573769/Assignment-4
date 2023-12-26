"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddlewares_1 = require("../middlewares/validationMiddlewares");
const course_validations_1 = require("./course.validations");
const course_controllers_1 = require("./course.controllers");
const router = express_1.default.Router();
router.post("/create-course", (0, validationMiddlewares_1.validationMiddleWare)(course_validations_1.CourseValidation.CourseValidationSchema), course_controllers_1.CourseController.createCourse);
router.get("/get-course", course_controllers_1.CourseController.getAllCourse);
router.get("/get-course/:id", course_controllers_1.CourseController.getSingleCourse);
exports.CourseRouter = router;
