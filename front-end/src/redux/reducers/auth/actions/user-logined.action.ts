import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

interface AuthUserLoginedActionPayload {
  token: string
}

export type AuthUserLoginedAction = PayloadAction<
  AuthUserLoginedActionPayload,
  TypesActions.AUTH_USER_LOGINED_ACTION
>

export const createAuthUserLoginedAction: ActionCreator<
  AuthUserLoginedAction
> = (payload: AuthUserLoginedActionPayload) => {
  return {
    type: TypesActions.AUTH_USER_LOGINED_ACTION,
    payload,
  }
}
