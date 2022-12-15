import { GameActionsTypes } from '../types'

export interface StartTournamentAction {
  type: `${GameActionsTypes.START_GAME_ACTION}`
  payload: undefined
}

export const createStartTournamentAction = (
  payload: undefined
): StartTournamentAction => {
  return {
    type: `${GameActionsTypes.START_GAME_ACTION}`,
    payload,
  }
}

export interface FinishTournamentAction {
  type: `${GameActionsTypes.FISNISH_GAME_ACTION}`
  payload: undefined
}

export const createFinishTournamentAction = (
  payload: undefined
): FinishTournamentAction => {
  return {
    type: `${GameActionsTypes.FISNISH_GAME_ACTION}`,
    payload,
  }
}
