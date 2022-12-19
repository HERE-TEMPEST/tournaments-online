import { Reducer } from '@reduxjs/toolkit'

import { HomeActionsTypes } from './actions'
import { HomeState, initialHomeState } from './home.state'
import { ActionTokens } from '../tokens'

export const eventsReducer: Reducer<HomeState, HomeActionsTypes> = (
  state = initialHomeState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case ActionTokens.HOME_RECEIVE_MESSAGE_ACTION: {
      return {
        ...state,
        chat: {
          error: undefined,
          loading: false,
          messages: [...state.chat.messages, payload],
        },
      }
    }

    case ActionTokens.AUTH_USER_SIGN_OUT_ACTION: {
      return initialHomeState
    }

    default: {
      return state
    }
  }
}
