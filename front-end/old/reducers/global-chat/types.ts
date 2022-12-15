import { IChatMessage } from '../../../models'
import { Region } from '../../../types'

export interface ChatState {
  messages: Array<IChatMessage>
  region: Region
  error: string
}

export enum ChatActionsTypes {
  CREATE_CHAT_SOCKET_ACTION = 'CREATE_CHAT_SOCKET_ACTION',
  CONNECT_TO_REGION_CHAT_ACTION = 'CONNECT_TO_REGION_CHAT_ACTION',
  DISCONNECT_CHAT_ACTION = 'DISCONNECT_CHAT_ACTION',
  ON_MESSAGE_TO_CHAT_ACTION = 'ON_MESSAGE_TO_CHAT_ACTION',
  SEND_MESSAGE_ACTION = 'SEND_MESSAGE_ACTION',
}
