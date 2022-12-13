import { SignOutUserAction } from '../../auth/actions/sign-out.action'
import {
  ErrorInFetchingUserTournamentsAction,
  IsFetchingUserTournamentsAction,
  UserTournamentsFetchedAction,
} from './user-tournaments.actions'
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
  | UserTournamentsFetchedAction
  | ErrorInFetchingUserTournamentsAction
  | IsFetchingUserTournamentsAction
  | SignOutUserAction
