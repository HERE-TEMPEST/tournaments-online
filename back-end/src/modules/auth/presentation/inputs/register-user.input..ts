import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LocalRegisterUserInput {
  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty({ nullable: false, type: String })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({ nullable: false, type: String })
  @IsString()
  @IsNotEmpty()
  password: string;
}
