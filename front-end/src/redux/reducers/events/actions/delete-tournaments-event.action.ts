import { EventsActionsTypes } from '../types'

interface DeleteTournamentWinnerActionPayload {
  id: string
}

export interface DeleteTournamentWinnerAction {
  type: `${EventsActionsTypes.DELETE_TOURNAMENT_WINNER_ACTION}`
  payload: DeleteTournamentWinnerActionPayload
}

export const createDeleteTournamentWinnerAction = (
  payload: DeleteTournamentWinnerActionPayload
): DeleteTournamentWinnerAction => {
  return {
    type: `${EventsActionsTypes.DELETE_TOURNAMENT_WINNER_ACTION}`,
    payload,
  }
}
