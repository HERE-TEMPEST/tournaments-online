import { ApiProperty } from "@nestjs/swagger";
import { TournamentDto } from "../dtos";

export class GetTournamentInfoResult {
  @ApiProperty({ nullable: true, type: TournamentDto })
  data: TournamentDto;
}
