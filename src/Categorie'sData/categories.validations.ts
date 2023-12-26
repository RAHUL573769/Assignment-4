import { z } from "zod";

const createCategoriesValidation = z.object({
  name: z.string().min(1).max(255),

  createdBy: z.string()
  // .refine((data) => data.trim().length > 0, {
  //   message: "Name is Required"
  // }) //trims white spaces and checks if length is greater tha 0 if not send an error message
});
export const CategoriesValidation = { createCategoriesValidation };
