import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type UserLoadingUserInfoActionPayload = undefined

export type UserLoadingUserInfoAction = PayloadAction<
  UserLoadingUserInfoActionPayload,
  TypesActions.USER_LOADING_USER_INFO_ACTION
>

export const createUserLoadingUserInfoAction: ActionCreator<
  UserLoadingUserInfoAction
> = (payload: UserLoadingUserInfoActionPayload = undefined) => {
  return {
    type: TypesActions.USER_LOADING_USER_INFO_ACTION,
    payload,
  }
}
