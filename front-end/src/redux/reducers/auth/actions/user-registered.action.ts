import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

interface AuthUserRegisteredActionPayload {
  token: string
}

export type AuthUserRegisteredAction = PayloadAction<
  AuthUserRegisteredActionPayload,
  TypesActions.AUTH_USER_REGISTERED_ACTION
>

export const createAuthUserRegisteredAction: ActionCreator<
  AuthUserRegisteredAction
> = (payload: AuthUserRegisteredActionPayload) => {
  return {
    type: TypesActions.AUTH_USER_REGISTERED_ACTION,
    payload,
  }
}
