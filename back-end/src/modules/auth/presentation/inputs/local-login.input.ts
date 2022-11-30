import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class LocalLoginInput {
  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  password: string;
}
