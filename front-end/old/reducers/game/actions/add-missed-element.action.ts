import { GameActionsTypes } from '../types'

export interface AddMissedElementToTournamentGameAction {
  type: `${GameActionsTypes.ADD_MISSED_ELEMENT_ACTION}`
  payload: undefined
}

export const createAddMissedElementToTournamentGameAction = (
  payload: undefined
): AddMissedElementToTournamentGameAction => {
  return {
    type: `${GameActionsTypes.ADD_MISSED_ELEMENT_ACTION}`,
    payload,
  }
}
