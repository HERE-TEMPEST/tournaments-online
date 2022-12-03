import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";

import { TournamentsProfile } from "../entities";
import { TOURNAMENT_RELATIONS_CONNECTION } from "../tokens";

@Injectable()
export class TournamentProfileRepository extends Repository<TournamentsProfile> {
  constructor(
    @InjectEntityManager(TOURNAMENT_RELATIONS_CONNECTION)
    tournamentMemberEntityManager: EntityManager
  ) {
    super(TournamentsProfile, tournamentMemberEntityManager);
  }
}
