import { userRole } from "./user.constants";

export type IUser = {
  username: string;
  email: string;
  password: string;
  role: userRole;
};
