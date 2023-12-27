import { IUser } from "../User'sData/user.interface";
import { User } from "../User'sData/user.model";
import { hashPassword } from "../helpers/HashingPasswordFolder/hashingPassword";

interface IRegister extends Omit<IUser, "role"> {}
interface ILogin {
  email: string;
  password: string;
}
const loginAuthServices = async (payload: ILogin) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new Error("Invalid Creddentials");
  }
  console.log("User FROM Authorization Services", user);
};

const registerAuthServices = async (payload: IRegister) => {
  //   console.log("From Register Services Payload is", payload);

  const password = payload.password;
  const hashedPassword = await hashPassword(password);
  //   console.log("Hashpassword From Auth Services", hashPassword);

  const result = await User.create({
    ...payload,
    password: hashedPassword,
    role: "user"
  });
  //   console.log("Result Output From Register Auth Services", result);
  return result;
};

export const AuthServices = { loginAuthServices, registerAuthServices };
