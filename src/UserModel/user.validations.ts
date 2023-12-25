import z from "zod";
import { USER_ROLES_Validations } from "./user.constants";

const createUserValidation = z.object({
  username: z.string({ required_error: "User Name is Required" }),
  email: z.string({ required_error: "Email is Needed" }),
  password: z.string(),
  role: z.enum([...USER_ROLES_Validations] as [string, ...string[]])
});

export const ZodValidation = { createUserValidation };
