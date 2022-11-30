import { ApiProperty } from "@nestjs/swagger";

import { Types } from "mongoose";
import { ProfileDto } from "./file.dto";

export class UserDto {
  @ApiProperty({ nullable: false, type: String })
  readonly _id: string | Types.ObjectId;

  @ApiProperty({ nullable: false, type: String })
  email: string;

  @ApiProperty({ nullable: false, type: String })
  name: string;

  @ApiProperty({ nullable: false, type: String })
  surname: string;

  @ApiProperty({ nullable: true, type: ProfileDto })
  profile?: ProfileDto;
}
