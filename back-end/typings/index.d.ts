import { JwtPayload } from "../libs/auth/src/types";

declare global {
  declare namespace Express {
    interface Request {
      userCredentials?: JwtPayload;
    }
  }
}

declare module "socket.io" {
  interface Socket {
    user: JwtPayload;
    currentTournament?: {
      profileUri: string;
      username: string;
      tournamentId: number;
    };
    chat?: {
      region: string;
      profileUri: string;
      username: string;
    };
  }
}

declare module "@nestjs/config" {
  class ConfigService<Config extends Record<unknown, Record<string, unknown>>> {
    public get<ConfigKey extends keyof Config>(
      parameter: ConfigKey
    ): Config[ConfigKey];
  }
}
