export type userRole = "user" | "admin";
export const USER_ROLES = {
  user: "user",
  admin: "admin"
} as const;

export const USER_ROLES_Validations: userRole[] = ["admin", "user"];
