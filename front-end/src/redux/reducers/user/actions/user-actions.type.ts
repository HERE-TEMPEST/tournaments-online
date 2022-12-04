import { SignOutUserAction } from '../../auth/actions/sign-out.action'
import {
  ErrorInFetchingUserCredentialsAction,
  ErrorInUpdatingUserCredentialsAction,
  IsFetchingUserCredentialsAction,
  UpdateUserCredentialsAction,
  UserCredentialsFetchedAction,
} from './user.actions'

export type UserActions =
  | IsFetchingUserCredentialsAction
  | UserCredentialsFetchedAction
  | ErrorInFetchingUserCredentialsAction
  | UpdateUserCredentialsAction
  | ErrorInUpdatingUserCredentialsAction
  | SignOutUserAction
