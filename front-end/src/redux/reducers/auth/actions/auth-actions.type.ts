import { AuthUserSignOutAction } from './user-sign-out.action'
import { AuthUserLoginedAction } from './user-logined.action'
import { AuthUserRegisteredAction } from './user-registered.action'
import { AuthErrorAction } from './error.action'
import { AuthLoadingAction } from './auth-loading.action'
import { AuthErrorUploadingProfileAction } from './error-uploading-profile.action'

export type AuthActionsTypes =
  | AuthUserLoginedAction
  | AuthUserRegisteredAction
  | AuthUserSignOutAction
  | AuthErrorAction
  | AuthLoadingAction
  | AuthErrorUploadingProfileAction
