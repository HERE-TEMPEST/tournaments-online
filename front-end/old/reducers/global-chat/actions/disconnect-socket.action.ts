import { ChatActionsTypes } from '../types'

type DisconnectChatSocketActionPayload = undefined

export interface DisconnectChatSocketAction {
  type: ChatActionsTypes.DISCONNECT_CHAT_ACTION
  payload: DisconnectChatSocketActionPayload
}

export const createDisconnectChatSocketAction = (
  payload: DisconnectChatSocketActionPayload
): DisconnectChatSocketAction => {
  return {
    type: ChatActionsTypes.DISCONNECT_CHAT_ACTION,
    payload,
  }
}
