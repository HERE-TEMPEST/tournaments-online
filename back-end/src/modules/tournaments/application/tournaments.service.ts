import { Inject, Injectable } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";

import { AwsS3Service } from "@tournaments/aws/s3";

import {
  TournamentDomain,
  TournamentMemberModel,
  TournamentModel,
} from "../domain";
import {
  TournamentMemberRepository,
  TournamentRepository,
  TOURNAMENTS_REPOSITORY_TOKEN,
  TOURNAMENTS_MEMBERS_REPOSITORY_TOKEN,
  TOURNAMENTS_PROFILE_REPOSITORY_TOKEN,
  TournamentProfileRepository,
} from "../infrastructure";
import {
  CreateTournamentParams,
  CreateTournamentResult,
  GetAllTournamentsResult,
  AddUserToTournamentParams,
  AddUserToTournamentResult,
  StartTournamentParams,
  StartTournamentResult,
  AddResultParams,
  GetTournamentWinnerParams,
  RemoveUserFromTournamentParams,
  CheckTournamentEndParams,
  GetAllTournamentsParams,
  UpdateProfileParams,
  UpdateProfileResult,
  GetProfileParams,
  GetProfileResult,
  GetTournamentInfoParams,
  GetTournamentsByMemberIdParams,
  GetTournamentsByMemberIdResult,
} from "./tournament-service.type";
import { UserModel, UsersService } from "../../users";
import { In } from "typeorm";

@Injectable()
export class TournamentsService {
  constructor(
    private readonly tournamentDomain: TournamentDomain,
    @Inject(TOURNAMENTS_REPOSITORY_TOKEN)
    private readonly tournamentRepository: TournamentRepository,
    @Inject(TOURNAMENTS_MEMBERS_REPOSITORY_TOKEN)
    private readonly tournamentMembersRepository: TournamentMemberRepository,
    @Inject(TOURNAMENTS_PROFILE_REPOSITORY_TOKEN)
    private readonly tournamentsProfileRepository: TournamentProfileRepository,
    private readonly scheduleService: SchedulerRegistry,
    private readonly awsS3Service: AwsS3Service,
    private readonly usersService: UsersService
  ) {}

  async createTournament(
    params: CreateTournamentParams
  ): Promise<CreateTournamentResult> {
    const newTournament = await this.tournamentDomain.createTournament(params);

    const tournament = await this.tournamentRepository.save(newTournament);

    return {
      tournament,
    };
  }

  async all(): Promise<GetAllTournamentsResult> {
    const tournaments = await this.tournamentRepository.find({
      where: {
        isStarted: false,
      },
      relations: {
        profile: true,
      },
    });

    return {
      tournaments,
    };
  }

  async allByRegion(
    params: GetAllTournamentsParams
  ): Promise<GetAllTournamentsResult> {
    const { region } = params;

    const tournaments = await this.tournamentRepository.find({
      where: {
        region,
        isStarted: false,
      },
      relations: {
        profile: true,
      },
    });

    return {
      tournaments,
    };
  }

  async getTournamentsByMemberId(
    props: GetTournamentsByMemberIdParams
  ): Promise<GetTournamentsByMemberIdResult> {
    const { memberId } = props;

    const trs = await this.tournamentRepository.find({
      where: {
        members: {
          memberId,
        },
        isFinished: true,
      },
      select: {
        id: true,
      },
    });

    const tournaments = await this.tournamentRepository.find({
      where: {
        id: In(trs.map((tr) => tr.id)),
      },
      relations: {
        members: true,
      },
    });

    return {
      tournaments,
    };
  }

  async addUserToTournament(
    params: AddUserToTournamentParams
  ): Promise<AddUserToTournamentResult> {
    const { tournamentId, userId } = params;

    const member = await this.tournamentDomain.addUserToTournament({
      tournamentId,
      userId,
    });

    if (!member) {
      return {
        isConnected: false,
        tournament: null,
      };
    }
    const newMember = await this.tournamentMembersRepository.save(member);

    return {
      isConnected: true,
      tournament: newMember.tournament,
    };
  }

  async startTournament(
    params: StartTournamentParams
  ): Promise<StartTournamentResult> {
    let { tournament } = params;
    const { endedTournamentCallback } = params;

    if (typeof tournament === "number") {
      tournament = await this.tournamentRepository.findOneBy({
        id: tournament,
      });
    }

    const isStartedGame = this.tournamentDomain.checkStartGame(tournament);

    // Cron
    if (isStartedGame) {
      await this.tournamentRepository.update(
        { id: tournament.id },
        { isStarted: isStartedGame }
      );

      const timeoutId = setTimeout(async () => {
        const { id } = tournament as TournamentModel;
        await this.tournamentRepository.update(
          { id: id },
          { isFinished: true }
        );

        await endedTournamentCallback();
      }, tournament.duration * 1000 + 500);

      this.scheduleService.addTimeout(`tournament:${tournament.id}`, timeoutId);
    }

    return {
      isStartedGame,
    };
  }

  async removeUserFromTournament(
    params: RemoveUserFromTournamentParams
  ): Promise<boolean> {
    const { tournamentId, userId } = params;

    const isDeleted = await this.tournamentDomain.removeUserFromTournament({
      tournamentId,
    });

    if (isDeleted) {
      await this.tournamentMembersRepository.delete({
        memberId: userId,
        tournament: { id: tournamentId },
      });
    }
    return isDeleted;
  }

  async addResult(params: AddResultParams) {
    const { score, tournamentId, userId } = params;

    await this.tournamentMembersRepository.update(
      {
        tournament: { id: tournamentId },
        memberId: userId,
      },
      {
        score,
      }
    );
  }

  async checkTournamentEnd(params: CheckTournamentEndParams): Promise<{
    winner: TournamentMemberModel | undefined;
    tournament: TournamentModel;
  }> {
    const { tournamentId } = params;

    const { winner, tournament } =
      await this.tournamentDomain.getTournamentWinner({
        tournamentId,
      });

    if (winner) {
      const timeoutId = this.scheduleService.getTimeout(
        `tournament:${tournamentId}`
      );
      clearTimeout(timeoutId);

      return { winner, tournament };
    }

    return { winner: undefined, tournament };
  }

  async getTournamentInfo(
    params: GetTournamentInfoParams
  ): Promise<TournamentModel | null> {
    const { tournamentId } = params;

    const info = await this.tournamentRepository.getTournamentById({
      id: tournamentId,
    });

    return info;
  }

  async getTournamentWinner(
    params: GetTournamentWinnerParams
  ): Promise<UserModel | null> {
    const { tournamentId } = params;

    const { winner } = await this.tournamentDomain.getTournamentWinner({
      tournamentId,
    });

    if (winner) {
      const { memberId } = winner;

      return this.usersService.getUserInfo({ userId: memberId });
    }

    return null;
  }

  async updateProfile(
    params: UpdateProfileParams
  ): Promise<UpdateProfileResult> {
    const { profile, tournamentId } = params;

    const uploadedProfile = await this.awsS3Service.putFile({
      file: profile,
      name: `tournament-${tournamentId}`,
      subPath: "tournaments-profiles/",
    });

    const { key, uri } = await this.awsS3Service.getPublicFileUri({
      ...uploadedProfile,
    });

    const tournamentProfile = await this.tournamentsProfileRepository.save({
      key,
      uri,
    });

    await this.tournamentRepository.update(
      { id: tournamentId },
      { profile: tournamentProfile }
    );

    return {
      key,
      uri,
    };
  }

  async getTournamentProfile(
    params: GetProfileParams
  ): Promise<GetProfileResult> {
    const { tournamentId } = params;

    const tournament = await this.tournamentRepository.findOne({
      where: {
        id: tournamentId,
      },
      relations: {
        profile: true,
      },
    });

    if (tournament.profile && tournament.profile.key) {
      const { key, uri } = await this.awsS3Service.getPublicFileUri({
        key: tournament.profile.key,
      });

      await this.tournamentsProfileRepository.update(
        { id: tournament.profile.id },
        {
          key,
          uri,
        }
      );
      return { key, uri };
    }

    return { key: null, uri: null };
  }
}
