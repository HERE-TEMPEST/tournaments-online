import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { AuthActionTokens } from '../auth.tokens'

interface UserLoginedActionPayload {
  token: string
}

export type UserLoginedAction = PayloadAction<
  UserLoginedActionPayload,
  AuthActionTokens.USER_LOGINED_ACTION
>

export const createUserLoginedAction: ActionCreator<UserLoginedAction> = (
  payload: UserLoginedActionPayload
) => {
  return {
    type: AuthActionTokens.USER_LOGINED_ACTION,
    payload,
  }
}
