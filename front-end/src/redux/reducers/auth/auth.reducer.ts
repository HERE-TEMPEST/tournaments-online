import {
  LOGIN_USER_ACTION,
  REGISTER_USER_ACTION,
  SIGNOUT_USER_ACTION,
  AuthActions,
} from './actions'
import { AuthState } from './auth.state'

const initialValue: AuthState = {
  loading: false,
  error: '',
  auth: null,
}

export const authReducer = (
  state: AuthState = initialValue,
  action: AuthActions
) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_USER_ACTION: {
      const { token } = payload
      return { ...state, auth: { token, isAuth: true } }
    }

    case REGISTER_USER_ACTION: {
      const { token } = payload
      return { ...state, auth: { token, isAuth: true } }
    }

    case SIGNOUT_USER_ACTION: {
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
