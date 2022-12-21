import { PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '../../../../models'
import { TypesActions } from '../../actions.type'

interface UserLoadedUserInfoActionPayload {
  user: IUser
}

export type UserLoadedUserInfoAction = PayloadAction<
  UserLoadedUserInfoActionPayload,
  TypesActions.USER_LOADED_TUSER_INFO_ACTION
>

export const createUserLoadedUserInfoAction = (
  payload: UserLoadedUserInfoActionPayload
): UserLoadedUserInfoAction => {
  return {
    type: TypesActions.USER_LOADED_TUSER_INFO_ACTION,
    payload,
  }
}
