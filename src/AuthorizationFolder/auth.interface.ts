import { IUser } from "../User'sData/user.interface";

export interface IRegister extends Omit<IUser, "role"> {}
export interface ILogin {
  email: string;
  password: string;
}
