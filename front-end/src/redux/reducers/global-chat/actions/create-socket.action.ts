import { ChatActionsTypes } from '../types'

interface CreateChatSocketActionPayload {
  token: string
}

export interface CreateChatSocketAction {
  type: ChatActionsTypes.CREATE_CHAT_SOCKET_ACTION
  payload: CreateChatSocketActionPayload
}

export const createCreateChatSocketAction = (
  payload: CreateChatSocketActionPayload
): CreateChatSocketAction => {
  return {
    type: ChatActionsTypes.CREATE_CHAT_SOCKET_ACTION,
    payload,
  }
}
