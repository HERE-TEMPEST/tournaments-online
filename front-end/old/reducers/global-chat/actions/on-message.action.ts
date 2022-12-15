import { IChatMessage } from '../../../../models'
import { ChatActionsTypes } from '../types'

interface OnMessageToChatActionPayload extends Pick<IChatMessage, 'type'> {
  userId: string
  body: string
  profileUri: string
  username: string
}

export interface OnMessageToChatAction {
  type: ChatActionsTypes.ON_MESSAGE_TO_CHAT_ACTION
  payload: OnMessageToChatActionPayload
}

export const createOnMessageToChatAction = (
  payload: OnMessageToChatActionPayload
): OnMessageToChatAction => {
  return {
    type: ChatActionsTypes.ON_MESSAGE_TO_CHAT_ACTION,
    payload,
  }
}
