import { GameActionsTypes } from '../types'

interface SendMessageToTournamentActionPayload {
  body: string
  profileUri: string
  username: string
}

export interface SendMessageToTournamentAction {
  type: GameActionsTypes.SEND_MESSAGE_TO_TOURNAMENT_ACTION
  payload: SendMessageToTournamentActionPayload
}

export const createSendMessageToTournamentAction = (
  payload: SendMessageToTournamentActionPayload
): SendMessageToTournamentAction => {
  return {
    type: GameActionsTypes.SEND_MESSAGE_TO_TOURNAMENT_ACTION,
    payload,
  }
}
