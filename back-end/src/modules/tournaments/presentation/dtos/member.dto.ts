import { ApiProperty } from "@nestjs/swagger";
import { TournamentMemberModel, TournamentModel } from "../../domain";
import { TournamentDto } from "./tournament.dto";

export class TournamentMemberDto implements TournamentMemberModel {
  @ApiProperty({ nullable: false, type: String })
  memberId: string;

  @ApiProperty({ nullable: false, type: Number })
  score: number;

  @ApiProperty({ nullable: false, type: TournamentDto })
  tournament: TournamentModel;
}
