import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

interface AuthErrorActionPayload {
  message: string
}

export type AuthErrorAction = PayloadAction<
  AuthErrorActionPayload,
  ActionTokens.AUTH_ERROR_ACTION
>

export const createAuthErrorAction: ActionCreator<AuthErrorAction> = (
  payload: AuthErrorActionPayload
) => {
  return {
    type: ActionTokens.AUTH_ERROR_ACTION,
    payload,
  }
}
