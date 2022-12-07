import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class JoinEvent {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  tournamentId: number;

  @IsString()
  @IsOptional()
  profileUri: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}
