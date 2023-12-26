import { z } from "zod";

const TagValidationSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean().optional()
});

const DetailValidationSchema = z.object({
  level: z.string(),
  description: z.string()
});

const CourseValidationSchema = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(),
  price: z.number(),
  tags: z.array(TagValidationSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  details: DetailValidationSchema
});

export const CourseValidation = { CourseValidationSchema };
