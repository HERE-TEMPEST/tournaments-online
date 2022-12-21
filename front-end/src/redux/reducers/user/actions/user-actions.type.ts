import { AuthUserSignOutAction } from '../../auth'
import { UserLoadedUserInfoAction } from './user-loaded.action'
import { UserErrorInLoadingUserInfoAction } from './user-loading-error.action'
import { UserLoadingUserInfoAction } from './user-loading.action'

export type UserActionsTypes =
  | UserLoadedUserInfoAction
  | UserLoadingUserInfoAction
  | UserErrorInLoadingUserInfoAction
  | AuthUserSignOutAction
