"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesValidation = void 0;
const zod_1 = require("zod");
const createCategoriesValidation = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255),
    createdBy: zod_1.z.string()
    // .refine((data) => data.trim().length > 0, {
    //   message: "Name is Required"
    // }) //trims white spaces and checks if length is greater tha 0 if not send an error message
});
exports.CategoriesValidation = { createCategoriesValidation };
