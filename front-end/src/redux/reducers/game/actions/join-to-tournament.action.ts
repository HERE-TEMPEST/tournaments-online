import { ITournament } from '../../../../models'
import { GameActionsTypes } from '../types'

export interface JoinToTournamentAction {
  type: `${GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION}`
  payload: ITournament
}

export const createJoinToTournamentAction = (
  payload: ITournament
): JoinToTournamentAction => {
  return {
    type: `${GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION}`,
    payload,
  }
}
