import { PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { IChatMessage } from '../../../../models'

import { TypesActions } from '../../actions.type'

type HomeNewMessageFromUserActionPayload = {
  userId: string
  body: string
  profileUri: string
  username: string
  type: 'message' | 'left' | 'join'
}

type HomeNewMessageFromUserActionResult = IChatMessage

export type HomeNewMessageFromUserAction = PayloadAction<
  HomeNewMessageFromUserActionResult,
  TypesActions.HOME_NEW_MESSAGE_FROM_USER_ACTION
>

export const createHomeNewMessageFromUserAction = (
  payload: HomeNewMessageFromUserActionPayload
): HomeNewMessageFromUserAction => {
  const id = v4()

  return {
    type: TypesActions.HOME_NEW_MESSAGE_FROM_USER_ACTION,
    payload: { ...payload, id },
  }
}
