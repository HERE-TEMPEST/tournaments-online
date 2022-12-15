import { Reducer } from '@reduxjs/toolkit'

import { AuthActionsTypes } from './actions'
import { AuthState, initialAuthState } from './auth.state'
import { AuthActionTokens } from './auth.tokens'

export const authReducer: Reducer<AuthState, AuthActionsTypes> = (
  state = initialAuthState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case AuthActionTokens.USER_LOGINED_ACTION: {
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

    case AuthActionTokens.USER_REGISTERED_ACTION: {
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

    case AuthActionTokens.AUTH_ERROR_ACTION: {
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

    case AuthActionTokens.USER_SIGN_OUT_ACTION: {
      return initialAuthState
    }

    default: {
      return state
    }
  }
}
