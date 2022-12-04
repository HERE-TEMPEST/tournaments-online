import { IsOptional, IsString } from "class-validator";

export class UpdateUserInfoInput {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  password: string;
}
