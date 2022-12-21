import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type AuthLoadingActionPayload = undefined

export type AuthLoadingAction = PayloadAction<
  AuthLoadingActionPayload,
  TypesActions.AUTH_LOADING_ACTION
>

export const createAuthLoadingAction: ActionCreator<AuthLoadingAction> = (
  payload: AuthLoadingActionPayload
) => {
  return {
    type: TypesActions.AUTH_LOADING_ACTION,
    payload,
  }
}
