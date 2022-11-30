import { Injectable } from "@nestjs/common";

import { UserModel, UsersService } from "../../users";
import {
  GoogleLoginParams,
  GoogleLoginResult,
  LocalLoginParams,
  LocalLoginResult,
  LocalRegistUserParams,
  LocalRegistUserResult,
} from "./auth-domain.type";

@Injectable()
export class AuthDomain {
  constructor(private readonly usersService: UsersService) {}

  async loginUser(
    loginDto: LocalLoginParams
  ): Promise<LocalLoginResult | null> {
    const { login, password } = loginDto;

    const user = await this.usersService.getByLogin({ login });

    if (user && password === user.password) {
      return user;
    }

    return null;
  }

  async registUser(
    params: LocalRegistUserParams
  ): Promise<LocalRegistUserResult> {
    const { login } = params;

    const user = await this.usersService.getByLogin({ login });

    if (user) {
      return null;
    }

    return this.usersService.createUser(params);
  }

  async googleLogin(params: GoogleLoginParams): Promise<GoogleLoginResult> {
    const { email, profileUri, ...parameters } = params;

    const user = await this.usersService.getByEmail({ email });

    if (user) {
      return user;
    }

    return this.usersService.createUser({
      ...parameters,
      email,
      profile: {
        key: null,
        uri: profileUri,
      },
    });
  }
}
