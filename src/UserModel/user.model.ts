import { Schema } from "mongoose";
import { User } from "./user.interface";

const UserModel = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});
