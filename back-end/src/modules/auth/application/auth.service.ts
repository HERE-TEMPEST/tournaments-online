import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

import { Configuration } from "@tournaments/config";
import { JwtPayload } from "@tournaments/auth";

import { AuthDomain } from "../domain";
import {
  GenerateTokenParams,
  GoogleLoginParams,
  GoogleLoginResult,
  LocalLoginParams,
  LocalLoginResult,
  LocalRegisterParams,
  LocalRegisterResult,
} from "./auth-service.type";

@Injectable()
export class AuthService {
  constructor(
    private readonly authDomainModel: AuthDomain,
    private readonly configService: ConfigService<Configuration>,
    private readonly jwtService: JwtService
  ) {}

  async login(params: LocalLoginParams): Promise<LocalLoginResult> {
    const user = await this.authDomainModel.loginUser(params);

    if (user) {
      const accessToken = await this.generateToken(user);

      return {
        accessToken,
      };
    }

    throw new BadRequestException();
  }

  async registerUser(
    params: LocalRegisterParams
  ): Promise<LocalRegisterResult> {
    const user = await this.authDomainModel.registUser(params);

    if (user) {
      const accessToken = await this.generateToken(user);

      return {
        accessToken,
      };
    }

    throw new BadRequestException();
  }

  async googleLogin(params: GoogleLoginParams): Promise<GoogleLoginResult> {
    const user = await this.authDomainModel.googleLogin(params);

    const accessToken = await this.generateToken(user);

    return {
      accessToken,
    };
  }

  private async generateToken(params: GenerateTokenParams): Promise<string> {
    const { _id } = params;

    const { accessTokenExpiresIn } = this.configService.get("jwt");

    const payload: JwtPayload = { userId: String(_id) };

    return this.jwtService.signAsync(payload, {
      expiresIn: accessTokenExpiresIn,
    });
  }
}
