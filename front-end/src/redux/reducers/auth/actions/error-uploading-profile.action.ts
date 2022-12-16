import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { ActionTokens } from '../../tokens'

interface AuthErrorUploadingProfileActionPayload {
  message: string
}

export type AuthErrorUploadingProfileAction = PayloadAction<
  AuthErrorUploadingProfileActionPayload,
  ActionTokens.AUTH_ERROR_UPLOADING_PROFILE_ACTION
>

export const createAuthErrorUploadingProfileAction: ActionCreator<
  AuthErrorUploadingProfileAction
> = (payload: AuthErrorUploadingProfileActionPayload) => {
  return {
    type: ActionTokens.AUTH_ERROR_UPLOADING_PROFILE_ACTION,
    payload,
  }
}
