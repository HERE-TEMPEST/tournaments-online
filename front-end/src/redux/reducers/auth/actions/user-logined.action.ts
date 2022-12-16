import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

interface AuthUserLoginedActionPayload {
  token: string
}

export type AuthUserLoginedAction = PayloadAction<
  AuthUserLoginedActionPayload,
  ActionTokens.AUTH_USER_LOGINED_ACTION
>

export const createAuthUserLoginedAction: ActionCreator<
  AuthUserLoginedAction
> = (payload: AuthUserLoginedActionPayload) => {
  return {
    type: ActionTokens.AUTH_USER_LOGINED_ACTION,
    payload,
  }
}
