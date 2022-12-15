import { ITournament, IUser } from '../../../models'

export interface UserState {
  user: IUser | null
  tournaments: Array<ITournament> | null
  loading: boolean
  loadingTournaments: boolean
  errorInFetchingTournaments: string | null
  errors: {
    update: string | null
    create: string | null
    fetch: string | null
  }
}

export enum UserActionsTypes {
  LOADING_USER_INFO_ACTION = 'LOADING_USER_INFO_ACTION',
  USER_INFO_WAS_LOADED_ACTION = 'USER_INFO_WAS_LOADED_ACTION',
  ERROR_IN_FETCHING_USER_CRED = 'ERROR_IN_FETCHING_USER_CRED',

  LOADING_USER_TOURNAMENTS_ACTION = 'LOADING_USER_TOURNAMENTS_ACTION',
  USER_TOURNAMENTS_WAS_LOADED_ACTION = 'USER_TOURNAMENTS_WAS_LOADED_ACTION',
  ERROR_IN_FETCHING_USER_TOURNAMENTS_ACTION = 'ERROR_IN_FETCHING_USER_TOURNAMENTS_ACTION',

  ERROR_IN_UPDATING_USER_CRED = 'ERROR_IN_UPDATING_USER_CRED',
  UPDATE_USER_CREDENTIALS_ACTION = 'UPDATE_USER_CREDENTIALS_ACTION',
  SIGNOUT_USER_ACTION = 'SIGNOUT_USER_ACTION',
}
