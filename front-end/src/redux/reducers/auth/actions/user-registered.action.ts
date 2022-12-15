import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { AuthActionTokens } from '../auth.tokens'

interface UserRegisteredActionPayload {
  token: string
}

export type UserRegisteredAction = PayloadAction<
  UserRegisteredActionPayload,
  AuthActionTokens.USER_REGISTERED_ACTION
>

export const createUserRegisteredAction: ActionCreator<UserRegisteredAction> = (
  payload: UserRegisteredActionPayload
) => {
  return {
    type: AuthActionTokens.USER_REGISTERED_ACTION,
    payload,
  }
}
