import { SignOutUserAction } from '../../auth/actions/sign-out.action'
import { ConnectToChatAction } from './connect-to-chat.action'
import { CreateChatSocketAction } from './create-socket.action'
import { DisconnectChatSocketAction } from './disconnect-socket.action'
import { OnMessageToChatAction } from './on-message.action'
import { SendMessageToChatAction } from './send-message.action'

export type ChatActions =
  | CreateChatSocketAction
  | ConnectToChatAction
  | DisconnectChatSocketAction
  | OnMessageToChatAction
  | SendMessageToChatAction
  | SignOutUserAction
