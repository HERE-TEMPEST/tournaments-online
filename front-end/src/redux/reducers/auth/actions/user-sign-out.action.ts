import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

type AuthUserSignOutActionPayload = undefined

export type AuthUserSignOutAction = PayloadAction<
  AuthUserSignOutActionPayload,
  ActionTokens.AUTH_USER_SIGN_OUT_ACTION
>

export const createAuthUserSignOutAction: ActionCreator<
  AuthUserSignOutAction
> = (payload: AuthUserSignOutActionPayload) => {
  return {
    type: ActionTokens.AUTH_USER_SIGN_OUT_ACTION,
    payload,
  }
}
