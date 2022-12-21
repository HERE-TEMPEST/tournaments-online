import { Reducer } from '@reduxjs/toolkit'

import { UserActionsTypes } from './actions'
import { UserState, initialUserState } from './user.state'
import { TypesActions } from '../actions.type'

export const userReducer: Reducer<UserState, UserActionsTypes> = (
  state = initialUserState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case TypesActions.USER_LOADING_USER_INFO_ACTION: {
      return {
        ...state,
        info: {
          data: undefined,
          error: undefined,
          loading: true,
        },
      }
    }

    case TypesActions.USER_LOADED_TUSER_INFO_ACTION: {
      const { user } = payload

      return {
        ...state,
        info: {
          data: user,
          error: undefined,
          loading: false,
        },
      }
    }

    case TypesActions.USER_ERROR_IN_LOADING_USER_INFO_ACTION: {
      const { message } = payload

      return {
        ...state,
        info: {
          data: undefined,
          error: message,
          loading: false,
        },
      }
    }

    case TypesActions.AUTH_USER_SIGN_OUT_ACTION: {
      return initialUserState
    }

    default: {
      return state
    }
  }
}
