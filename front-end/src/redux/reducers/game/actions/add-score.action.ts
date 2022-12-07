import { GameActionsTypes } from '../types'

interface AddScoreToTournamentGameActionPayload {
  score: number
}

export interface AddScoreToTournamentGameAction {
  type: `${GameActionsTypes.ADD_SCORE_ACTION}`
  payload: AddScoreToTournamentGameActionPayload
}

export const createAddScoreToTournamentGameAction = (
  payload: AddScoreToTournamentGameActionPayload
): AddScoreToTournamentGameAction => {
  return {
    type: `${GameActionsTypes.ADD_SCORE_ACTION}`,
    payload,
  }
}
