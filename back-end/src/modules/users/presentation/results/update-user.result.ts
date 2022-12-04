import { ApiProperty } from "@nestjs/swagger";

import { UserDto } from "../dtos";

export class UpdateUserInfoResult {
  @ApiProperty({ nullable: true, type: UserDto })
  data: UserDto;
}
