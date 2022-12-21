import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type UserErrorInLoadingUserInfoActionPayload = {
  message: string
}

export type UserErrorInLoadingUserInfoAction = PayloadAction<
  UserErrorInLoadingUserInfoActionPayload,
  TypesActions.USER_ERROR_IN_LOADING_USER_INFO_ACTION
>

export const createUserErrorInLoadingUserInfoAction: ActionCreator<
  UserErrorInLoadingUserInfoAction
> = (payload: UserErrorInLoadingUserInfoActionPayload) => {
  return {
    type: TypesActions.USER_ERROR_IN_LOADING_USER_INFO_ACTION,
    payload,
  }
}
