import { UserSignOutAction } from './user-sign-out.action'
import { UserLoginedAction } from './user-logined.action'
import { UserRegisteredAction } from './user-registered.action'
import { AuthErrorAction } from './error.action'

export type AuthActionsTypes =
  | UserLoginedAction
  | UserRegisteredAction
  | UserSignOutAction
  | AuthErrorAction
