import { GameActionsTypes } from '../types'

export interface SendTournamentResultAction {
  type: `${GameActionsTypes.SEND_TOURNAMENT_RESULT_ACTION}`
  payload: undefined
}

export const createSendTournamentResultAction = (
  payload: undefined
): SendTournamentResultAction => {
  return {
    type: `${GameActionsTypes.SEND_TOURNAMENT_RESULT_ACTION}`,
    payload,
  }
}
