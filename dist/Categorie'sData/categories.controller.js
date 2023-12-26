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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const catchAsyncFunction_1 = require("../helpers/CatchAsyccFunction/catchAsyncFunction");
const categories_services_1 = require("./categories.services");
const createCategory = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategory = req.body;
        const result = yield categories_services_1.CategoryServices.createACategory(newCategory);
        console.log("Data from Categories Controllers", result);
        res.status(200).json({
            message: "Categories Data Created",
            data: result,
            success: "Success"
        });
    }
    catch (error) {
        next(error);
    }
}));
const retrieveAllCategories = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categories_services_1.CategoryServices.receiveAllSingleCategory();
        res.status(200).json({
            message: "Categories Data Created",
            data: result,
            success: "Success"
        });
    }
    catch (error) {
        next(error);
    }
}));
const retrieveSingleCategory = (0, catchAsyncFunction_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categories_services_1.CategoryServices.receiveAllSingleCategory();
        res.status(200).json({
            message: "Categories Data Created",
            data: result,
            success: "Success"
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.CategoriesController = { createCategory, retrieveAllCategories };
