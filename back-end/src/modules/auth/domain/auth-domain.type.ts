import { UserModel } from "../../users/domain";

export interface GoogleLoginParams {
  email: string;
  name: string;
  surname: string;
  profileUri: string;
}
export type GoogleLoginResult = UserModel;

export interface LocalRegistUserParams {
  email: string;
  name: string;
  surname: string;
  login: string;
  password: string;
}
export type LocalRegistUserResult = UserModel;

export interface LocalLoginParams {
  login: string;
  password: string;
}
export type LocalLoginResult = UserModel;
