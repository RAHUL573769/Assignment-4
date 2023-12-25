import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDb = async (payload: IUser): Promise<IUser> => {
  console.log("User Payload", payload);
  const result = await User.create(payload);
  return result;
};

export const UserServices = { createUserIntoDb };
