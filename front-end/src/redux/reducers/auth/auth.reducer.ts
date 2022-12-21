import { Reducer } from '@reduxjs/toolkit'

import { AuthActionsTypes } from './actions'
import { AuthState, initialAuthState } from './auth.state'
import { TypesActions } from '../actions.type'

export const authReducer: Reducer<AuthState, AuthActionsTypes> = (
  state = initialAuthState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case TypesActions.AUTH_USER_LOGINED_ACTION: {
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

    case TypesActions.AUTH_USER_REGISTERED_ACTION: {
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

    case TypesActions.AUTH_LOADING_ACTION: {
      return {
        data: {
          isAuth: false,
          token: undefined,
        },
        error: undefined,
        loading: true,
      }
    }

    case TypesActions.AUTH_ERROR_ACTION: {
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

    case TypesActions.AUTH_ERROR_UPLOADING_PROFILE_ACTION: {
      return state
    }

    case TypesActions.AUTH_USER_SIGN_OUT_ACTION: {
      return initialAuthState
    }

    default: {
      return state
    }
  }
}
