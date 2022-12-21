import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

interface AuthErrorActionPayload {
  message: string
}

export type AuthErrorAction = PayloadAction<
  AuthErrorActionPayload,
  TypesActions.AUTH_ERROR_ACTION
>

export const createAuthErrorAction: ActionCreator<AuthErrorAction> = (
  payload: AuthErrorActionPayload
) => {
  return {
    type: TypesActions.AUTH_ERROR_ACTION,
    payload,
  }
}
