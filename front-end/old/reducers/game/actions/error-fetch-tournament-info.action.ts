import { GameActionsTypes } from '../types'

export interface ErrorFetchTournamentInfoAction {
  type: `${GameActionsTypes.ERROR_FETCH_TOURNAMENT_INFO_ACTION}`
  payload: string
}

export const createErrorFetchTournamentInfoAction = (
  payload: string
): ErrorFetchTournamentInfoAction => {
  return {
    type: `${GameActionsTypes.ERROR_FETCH_TOURNAMENT_INFO_ACTION}`,
    payload,
  }
}
