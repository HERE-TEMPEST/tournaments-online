import { ChatActionsTypes } from '../types'

interface SendMessageToChatActionPayload {
  body: string
  profileUri: string
  username: string
}

export interface SendMessageToChatAction {
  type: ChatActionsTypes.SEND_MESSAGE_ACTION
  payload: SendMessageToChatActionPayload
}

export const createSendMessageToChatAction = (
  payload: SendMessageToChatActionPayload
): SendMessageToChatAction => {
  return {
    type: ChatActionsTypes.SEND_MESSAGE_ACTION,
    payload,
  }
}
