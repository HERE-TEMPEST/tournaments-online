import { GameActionsTypes } from '../types'

export interface NotJoinedToTournamentAction {
  type: `${GameActionsTypes.NOT_JOINED_TO_TOURNAMENT}`
  payload: undefined
}

export const createNotJoinedToTournamentAction = (
  payload: undefined
): NotJoinedToTournamentAction => {
  return {
    type: `${GameActionsTypes.NOT_JOINED_TO_TOURNAMENT}`,
    payload,
  }
}
