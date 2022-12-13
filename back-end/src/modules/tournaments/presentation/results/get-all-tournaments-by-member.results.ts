import { ApiProperty } from "@nestjs/swagger";
import { TournamentDto } from "../dtos";

export class GetAllTournamentsByMemberIdResult {
  @ApiProperty({ nullable: false, isArray: true, type: TournamentDto })
  data?: Array<TournamentDto>;
}
