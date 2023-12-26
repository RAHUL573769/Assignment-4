import GenericError from "../classes/errorClasses/GenericError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDb = async (payload: IUser): Promise<IUser> => {
  //   console.log("User Payload From Create User Services", payload);
  const result = await User.create(payload);

  return result;
};

const getAllCreatedUsersFromDb = async (): Promise<IUser[]> => {
  const result = await User.find({});
  return result;
};
const getSingleDataFromDb = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};
const updateUserData = async (
  id: string,
  userData: IUser
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true
  });
  return result;
};
export const UserServices = {
  createUserIntoDb,
  getAllCreatedUsersFromDb,
  getSingleDataFromDb,
  updateUserData
};
