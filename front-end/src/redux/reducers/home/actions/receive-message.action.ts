import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { IChatMessage } from '../../../../models'

import { ActionTokens } from '../../tokens'

type HomeReceiveMessageActionPayload = {
  message: string
  userId: string
  body: string
  profileUri: string
  username: string
}

type HomeReceiveMessageActionResult = IChatMessage

export type HomeReceiveMessageAction = PayloadAction<
  HomeReceiveMessageActionResult,
  ActionTokens.HOME_RECEIVE_MESSAGE_ACTION
>

export const createHomeReceiveMessageAction: ActionCreator<
  HomeReceiveMessageAction
> = (payload: HomeReceiveMessageActionPayload) => {
  const id = v4()

  return {
    type: ActionTokens.HOME_RECEIVE_MESSAGE_ACTION,
    payload: { ...payload, id, type: 'message' },
  }
}
