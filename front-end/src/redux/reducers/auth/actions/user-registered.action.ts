import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

interface AuthUserRegisteredActionPayload {
  token: string
}

export type AuthUserRegisteredAction = PayloadAction<
  AuthUserRegisteredActionPayload,
  ActionTokens.AUTH_USER_REGISTERED_ACTION
>

export const createAuthUserRegisteredAction: ActionCreator<
  AuthUserRegisteredAction
> = (payload: AuthUserRegisteredActionPayload) => {
  return {
    type: ActionTokens.AUTH_USER_REGISTERED_ACTION,
    payload,
  }
}
