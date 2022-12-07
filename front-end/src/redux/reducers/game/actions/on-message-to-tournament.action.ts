import { IChatMessage } from '../../../../models'
import { GameActionsTypes } from '../types'

interface OnMessageToTournamentActionPayload
  extends Pick<IChatMessage, 'type'> {
  userId: string
  body: string
  profileUri: string
  username: string
}

export interface OnMessageToTournamentAction {
  type: GameActionsTypes.ON_MESSAGE_TO_TOURNAMENT_ACTION
  payload: OnMessageToTournamentActionPayload
}

export const createOnMessageToTournamentAction = (
  payload: OnMessageToTournamentActionPayload
): OnMessageToTournamentAction => {
  return {
    type: GameActionsTypes.ON_MESSAGE_TO_TOURNAMENT_ACTION,
    payload,
  }
}
