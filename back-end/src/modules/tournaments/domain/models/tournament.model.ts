import { TournamentMemberModel } from "./tournament-member.model";

export interface TournamentModel {
  id: number;
  isStarted: boolean;
  name: string;
  duration: number;
  currentAmount: number;
  description: string;
  capacity: number;
  region: string;
  profile?: {
    key: string;
    uri: string;
  };
  isFinished: boolean;
  members: Array<TournamentMemberModel>;
}
