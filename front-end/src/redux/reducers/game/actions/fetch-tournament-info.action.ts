import { GameActionsTypes } from '../types'

export interface FetchTournamentInfoAction {
  type: `${GameActionsTypes.FETCH_TOURNAMENT_INFO_ACTION}`
  payload: undefined
}

export const createFetchTournamentInfoAction = (
  payload: undefined
): FetchTournamentInfoAction => {
  return {
    type: `${GameActionsTypes.FETCH_TOURNAMENT_INFO_ACTION}`,
    payload,
  }
}
