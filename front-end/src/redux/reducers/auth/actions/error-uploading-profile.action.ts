import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

interface AuthErrorUploadingProfileActionPayload {
  message: string
}

export type AuthErrorUploadingProfileAction = PayloadAction<
  AuthErrorUploadingProfileActionPayload,
  TypesActions.AUTH_ERROR_UPLOADING_PROFILE_ACTION
>

export const createAuthErrorUploadingProfileAction: ActionCreator<
  AuthErrorUploadingProfileAction
> = (payload: AuthErrorUploadingProfileActionPayload) => {
  return {
    type: TypesActions.AUTH_ERROR_UPLOADING_PROFILE_ACTION,
    payload,
  }
}
