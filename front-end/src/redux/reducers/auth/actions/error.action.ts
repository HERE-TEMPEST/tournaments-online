import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { AuthActionTokens } from '../auth.tokens'

interface AuthErrorActionPayload {
  message: string
}

export type AuthErrorAction = PayloadAction<
  AuthErrorActionPayload,
  AuthActionTokens.AUTH_ERROR_ACTION
>

export const createAuthErrorAction: ActionCreator<AuthErrorAction> = (
  payload: AuthErrorActionPayload
) => {
  return {
    type: AuthActionTokens.AUTH_ERROR_ACTION,
    payload,
  }
}
