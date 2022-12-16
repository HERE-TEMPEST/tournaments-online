import { Reducer } from '@reduxjs/toolkit'

import { AuthActionsTypes } from './actions'
import { AuthState, initialAuthState } from './auth.state'
import { ActionTokens } from '../tokens'

export const authReducer: Reducer<AuthState, AuthActionsTypes> = (
  state = initialAuthState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case ActionTokens.AUTH_USER_LOGINED_ACTION: {
      const { token } = payload

      return {
        data: {
          isAuth: true,
          token: token,
        },
        loading: false,
        error: undefined,
      }
    }

    case ActionTokens.AUTH_USER_REGISTERED_ACTION: {
      const { token } = payload

      return {
        data: {
          isAuth: true,
          token: token,
        },
        loading: false,
        error: undefined,
      }
    }

    case ActionTokens.AUTH_LOADING_ACTION: {
      return {
        data: {
          isAuth: false,
          token: undefined,
        },
        error: undefined,
        loading: true,
      }
    }

    case ActionTokens.AUTH_ERROR_ACTION: {
      const { message } = payload

      return {
        data: {
          isAuth: false,
          token: undefined,
        },
        error: message,
        loading: false,
      }
    }

    case ActionTokens.AUTH_ERROR_UPLOADING_PROFILE_ACTION: {
      return state
    }

    case ActionTokens.AUTH_USER_SIGN_OUT_ACTION: {
      return initialAuthState
    }

    default: {
      return state
    }
  }
}
