import { IUser } from '../../../models'

export interface UserState {
  user: IUser | null
  loading: boolean
  error?: string
}

export enum UserActionsTypes {
  LOADING_USER_INFO_ACTION = 'LOADING_USER_INFO_ACTION',
  USER_INFO_WAS_LOADED_ACTION = 'USER_INFO_WAS_LOADED_ACTION',
  ERROR_IN_FETCHING_USER_CRED = 'ERROR_IN_FETCHING_USER_CRED',
}
