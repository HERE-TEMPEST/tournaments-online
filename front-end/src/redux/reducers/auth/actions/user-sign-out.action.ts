import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type AuthUserSignOutActionPayload = undefined

export type AuthUserSignOutAction = PayloadAction<
  AuthUserSignOutActionPayload,
  TypesActions.AUTH_USER_SIGN_OUT_ACTION
>

export const createAuthUserSignOutAction: ActionCreator<
  AuthUserSignOutAction
> = (payload: AuthUserSignOutActionPayload) => {
  return {
    type: TypesActions.AUTH_USER_SIGN_OUT_ACTION,
    payload,
  }
}
