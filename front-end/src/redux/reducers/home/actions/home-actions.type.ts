import { AuthUserSignOutAction } from '../../auth'
import { HomeReceiveMessageAction } from './receive-message.action'

export type HomeActionsTypes = HomeReceiveMessageAction | AuthUserSignOutAction
