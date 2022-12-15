import { ITournament } from '../../../../models'
import { GameActionsTypes } from '../types'

interface JoinToTournamentActionPayload {
  tournament: ITournament
  token: string
  user: {
    username: string
    profileUri: string
  }
}

export interface JoinToTournamentAction {
  type: `${GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION}`
  payload: JoinToTournamentActionPayload
}

export const createJoinToTournamentAction = (
  payload: JoinToTournamentActionPayload
): JoinToTournamentAction => {
  return {
    type: `${GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION}`,
    payload,
  }
}
