import { userRole } from "./user.constants";

export interface IUser {
  username: string;
  email: string;
  password: string;
  role: userRole;
}
