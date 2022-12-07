import { GameActionsTypes } from '../types'

export interface JoinedToTournamentAction {
  type: `${GameActionsTypes.JOINED_TO_TOURNAMENT}`
  payload: undefined
}

export const createJoinedToTournamentAction = (
  payload: undefined
): JoinedToTournamentAction => {
  return {
    type: `${GameActionsTypes.JOINED_TO_TOURNAMENT}`,
    payload,
  }
}
