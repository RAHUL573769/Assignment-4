import { Schema, model } from "mongoose";
import { USER_ROLES } from "./user.constants";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "User Name is Required"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true
  },
  password: {
    type: String
  },
  role: Object.values(USER_ROLES)
});
export const User = model<IUser>("User", userSchema);
