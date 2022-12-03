import { ITournament } from '../../../models'

export interface GameState {
  tournament: ITournament | null
  error: string
}

export enum GameActionsTypes {
  JOIN_TO_TOURNAMENT_ACTION = 'JOIN_TO_TOURNAMENT_ACTION',
  LEAVE_FROM_TOURNAMENT_ACTION = 'LEAVE_FROM_TOURNAMENT_ACTION',
  INIT_TOURNAMENT_PROFILE_ACTION = 'INIT_TOURNAMENT_PROFILE_ACTION',
}
