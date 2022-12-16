import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

type AuthLoadingActionPayload = undefined

export type AuthLoadingAction = PayloadAction<
  AuthLoadingActionPayload,
  ActionTokens.AUTH_LOADING_ACTION
>

export const createAuthLoadingAction: ActionCreator<AuthLoadingAction> = (
  payload: AuthLoadingActionPayload
) => {
  return {
    type: ActionTokens.AUTH_LOADING_ACTION,
    payload,
  }
}
