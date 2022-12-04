import { IUser } from '../../../models'

export interface UserState {
  user: IUser | null
  loading: boolean
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
  ERROR_IN_UPDATING_USER_CRED = 'ERROR_IN_UPDATING_USER_CRED',
  UPDATE_USER_CREDENTIALS_ACTION = 'UPDATE_USER_CREDENTIALS_ACTION',
}
