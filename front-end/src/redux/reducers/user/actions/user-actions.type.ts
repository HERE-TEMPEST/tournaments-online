import {
  ErrorInFetchingUserCredentialsAction,
  IsFetchingUserCredentialsAction,
  UserCredentialsFetchedAction,
} from './user.actions'

export type UserActions =
  | IsFetchingUserCredentialsAction
  | UserCredentialsFetchedAction
  | ErrorInFetchingUserCredentialsAction
