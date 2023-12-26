"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseValidation = void 0;
const zod_1 = require("zod");
const TagValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional()
});
const DetailValidationSchema = zod_1.z.object({
    level: zod_1.z.string(),
    description: zod_1.z.string()
});
const CourseValidationSchema = zod_1.z.object({
    title: zod_1.z.string(),
    instructor: zod_1.z.string(),
    categoryId: zod_1.z.string(),
    price: zod_1.z.number(),
    tags: zod_1.z.array(TagValidationSchema),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
    language: zod_1.z.string(),
    provider: zod_1.z.string(),
    details: DetailValidationSchema
});
exports.CourseValidation = { CourseValidationSchema };
