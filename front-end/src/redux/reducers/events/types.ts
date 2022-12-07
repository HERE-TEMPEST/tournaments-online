import { ITournamentEvent } from '../../../models'

export interface EventsState {
  error: string | null
  tournaments: Array<ITournamentEvent>
}

export enum EventsActionsTypes {
  ADD_TOURNAMENT_WINNER_ACTION = 'ADD_TOURNAMENT_WINNER_ACTION',
  DELETE_TOURNAMENT_WINNER_ACTION = 'DELETE_TOURNAMENT_WINNER_ACTION',
}
