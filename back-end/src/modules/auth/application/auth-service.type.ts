import { UserModel } from "../../users";

export interface GoogleLoginParams {
  email: string;
  name: string;
  surname: string;
  profileUri: string;
}
export interface GoogleLoginResult {
  accessToken: string;
}

export type GenerateTokenParams = Pick<UserModel, "_id">;

export interface LocalRegisterParams {
  email: string;
  name: string;
  surname: string;
  login: string;
  password: string;
}
export interface LocalRegisterResult {
  accessToken: string;
}

export interface LocalLoginParams {
  login: string;
  password: string;
}
export interface LocalLoginResult {
  accessToken: string;
}
