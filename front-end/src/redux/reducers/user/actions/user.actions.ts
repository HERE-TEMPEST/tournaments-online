import { IUser } from '../../../../models'
import { UserActionsTypes } from '../types'

export interface IsFetchingUserCredentialsAction {
  type: `${UserActionsTypes.LOADING_USER_INFO_ACTION}`
  payload: undefined
}

export const createFetchingUserCredentialsAction =
  (): IsFetchingUserCredentialsAction => {
    return {
      type: `${UserActionsTypes.LOADING_USER_INFO_ACTION}`,
      payload: undefined,
    }
  }

export interface UserCredentialsFetchedAction {
  type: `${UserActionsTypes.USER_INFO_WAS_LOADED_ACTION}`
  payload: IUser
}

export const createUserCredentialsWasLoadedAction = (
  payload: IUser
): UserCredentialsFetchedAction => {
  return {
    type: `${UserActionsTypes.USER_INFO_WAS_LOADED_ACTION}`,
    payload: payload,
  }
}

export interface ErrorInFetchingUserCredentialsAction {
  type: `${UserActionsTypes.ERROR_IN_FETCHING_USER_CRED}`
  payload: string
}

export const createErrorInFetchingUserCredentialsAction = (
  message: string
): ErrorInFetchingUserCredentialsAction => {
  return {
    type: `${UserActionsTypes.ERROR_IN_FETCHING_USER_CRED}`,
    payload: message,
  }
}