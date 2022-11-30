import { IsNotEmpty, IsString } from "class-validator";

export class JoinEvent {
  region: string;
  profileUri: string;
  username: string;
}
