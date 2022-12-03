import { Region } from '../../../../types'
import { ChatActionsTypes } from '../types'

interface ConnectToChatActionPayload {
  region: Region
  profileUri: string
  username: string
}

export interface ConnectToChatAction {
  type: ChatActionsTypes.CONNECT_TO_REGION_CHAT_ACTION
  payload: ConnectToChatActionPayload
}

export const createConnectToChatAction = (
  payload: ConnectToChatActionPayload
): ConnectToChatAction => {
  return {
    type: ChatActionsTypes.CONNECT_TO_REGION_CHAT_ACTION,
    payload,
  }
}
