import { IUser } from "../User'sData/user.interface";
import { User } from "../User'sData/user.model";
import config from "../config";
import { hashPassword } from "../helpers/HashingPasswordFolder/hashingPassword";
import { ILogin, IRegister } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
const loginAuthServices = async (payload: ILogin) => {
  // console.log("Payload from Login Services",payload);
  const user = await User.findOne({ email: payload.email });
  // console.log("User FROM Authorization Services", user);
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  const jwtPayLoad: JwtPayload = { email: user.email, role: user.role };

  const token = jwt.sign(jwtPayLoad, "tour-secret", {
    expiresIn: "10d"
  });

  console.log("Token From Auth Services", token);

  return { token };
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

const changePasswordAuthServices = async (
  decoded: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  console.log(decoded);
  console.log(payload);
};

export const AuthServices = {
  loginAuthServices,
  registerAuthServices,
  changePasswordAuthServices
};
