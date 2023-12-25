import { userRole } from "./user.constants";

export interface User {
  username: string;
  email: string;
  password: string;
  role: userRole;
}
