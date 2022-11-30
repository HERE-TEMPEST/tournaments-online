import {
  LOGIN_USER_ACTION,
  REGISTER_USER_ACTION,
  SIGNOUT_USER_ACTION,
  AuthActions,
} from './actions'
import { AuthState } from './auth.state'

const SAVED_TOKEN_KEY = 'tournaments-online-token'

const savedToken = localStorage.getItem(SAVED_TOKEN_KEY)

const initialValue: AuthState = {
  loading: false,
  error: '',
  auth: { isAuth: !!savedToken, token: savedToken || '' },
}

export const authReducer = (
  state: AuthState = initialValue,
  action: AuthActions
) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_USER_ACTION: {
      const { token } = payload

      localStorage.setItem(SAVED_TOKEN_KEY, token)

      return { ...state, auth: { token, isAuth: true } }
    }

    case REGISTER_USER_ACTION: {
      const { token } = payload

      localStorage.setItem(SAVED_TOKEN_KEY, token)

      return { ...state, auth: { token, isAuth: true } }
    }

    case SIGNOUT_USER_ACTION: {
      localStorage.setItem(SAVED_TOKEN_KEY, '')

      return {
        ...initialValue,
        auth: {
          token: '',
          isAuth: false,
        },
      }
    }

    default:
      return state
  }
}
