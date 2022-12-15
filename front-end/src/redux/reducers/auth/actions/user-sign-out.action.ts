import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { AuthActionTokens } from '../auth.tokens'

export type UserSignOutAction = PayloadAction<
  undefined,
  AuthActionTokens.USER_SIGN_OUT_ACTION
>

export const createUserSignOutAction: ActionCreator<UserSignOutAction> = (
  payload: undefined
) => {
  return {
    type: AuthActionTokens.USER_SIGN_OUT_ACTION,
    payload,
  }
}
