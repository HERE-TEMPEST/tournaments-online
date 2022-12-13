import { ApiProperty } from "@nestjs/swagger";
import { TournamentModel } from "../../domain";
import { ProfileDto } from "./file.dto";
import { TournamentMemberDto } from "./member.dto";

export class TournamentDto implements TournamentModel {
  @ApiProperty({ nullable: true, type: ProfileDto })
  profile?: ProfileDto;

  @ApiProperty({ nullable: false, type: Boolean })
  isFinished: boolean;

  @ApiProperty({ nullable: false, type: Number })
  id: number;

  @ApiProperty({ nullable: false, type: Boolean })
  isStarted: boolean;

  @ApiProperty({ nullable: false, type: String })
  name: string;

  @ApiProperty({ nullable: false, type: Number })
  duration: number;

  @ApiProperty({ nullable: false, type: String })
  description: string;

  @ApiProperty({ nullable: false, type: Number })
  currentAmount: number;

  @ApiProperty({ nullable: false, type: Number })
  members: Array<TournamentMemberDto>;

  @ApiProperty({ nullable: false, type: Number })
  capacity: number;

  @ApiProperty({ nullable: false, type: String })
  region: string;
}
