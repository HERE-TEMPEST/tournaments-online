import { Types } from "mongoose";

export interface UserModel {
  _id: string | Types.ObjectId;
  email: string;
  login: string;
  password: string;
  name: string;
  surname: string;
  profile: {
    key: string;
    uri: string;
  };
}
