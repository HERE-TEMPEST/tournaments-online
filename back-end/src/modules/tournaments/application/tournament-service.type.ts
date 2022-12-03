import { TournamentModel } from "../domain";

export type CreateTournamentParams = Omit<
  TournamentModel,
  "id" | "currentAmount" | "members" | "isStarted"
>;

export interface UpdateProfileParams {
  tournamentId: number;
  profile: Express.Multer.File;
}
export interface UpdateProfileResult {
  key: string;
  uri: string;
}

export interface GetProfileParams {
  tournamentId: number;
}
export interface GetProfileResult {
  key: string;
  uri: string;
}

export interface CreateTournamentResult {
  tournament: TournamentModel;
}

export interface GetAllTournamentsParams {
  region: string;
}

export interface GetAllTournamentsResult {
  tournaments: Array<TournamentModel>;
}

export interface AddUserToTournamentParams {
  userId: string;
  tournamentId: number;
}

export interface AddUserToTournamentResult {
  isConnected: boolean;
  tournament: TournamentModel;
}

export interface StartTournamentParams {
  tournament: TournamentModel | number;
  endedTournamentCallback: (...args: any[]) => Promise<void> | void;
}

export interface StartTournamentResult {
  isStartedGame: boolean;
}

export interface AddResultParams {
  userId: string;
  tournamentId: number;
  score: number;
}

export interface GetTournamentWinnerParams {
  tournamentId: number;
}

export interface GetTournamentInfoParams {
  tournamentId: number;
}

export interface RemoveUserFromTournamentParams {
  userId: string;
  tournamentId: number;
}

export interface CheckTournamentEndParams {
  tournamentId: number;
}
