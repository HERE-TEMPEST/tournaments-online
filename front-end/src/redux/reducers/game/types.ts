import { ITournament } from '../../../models'

export interface GameState {
  tournament: ITournament | null
  error: string
  loading: boolean
}

export enum GameActionsTypes {
  JOIN_TO_TOURNAMENT_ACTION = 'JOIN_TO_TOURNAMENT_ACTION',
  LEAVE_FROM_TOURNAMENT_ACTION = 'LEAVE_FROM_TOURNAMENT_ACTION',
  INIT_TOURNAMENT_PROFILE_ACTION = 'INIT_TOURNAMENT_PROFILE_ACTION',
  FETCH_TOURNAMENT_INFO_ACTION = 'FETCH_TOURNAMENT_INFO_ACTION',
  ERROR_FETCH_TOURNAMENT_INFO_ACTION = 'ERROR_FETCH_TOURNAMENT_INFO_ACTION',
}
