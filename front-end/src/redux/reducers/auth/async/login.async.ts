import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../../../typings'
import { AUTH_POST_LOGIN_USER_URI } from '../../paths'

import {
  createAuthErrorAction,
  createAuthLoadingAction,
  createAuthUserLoginedAction,
} from '../actions'

interface AsyncLoginUserActionParams {
  login: string
  password: string
}

export const createAsyncAuthLoginUserAction = (
  params: AsyncLoginUserActionParams
): ThunkAction<void, RootState, unknown, AnyAction> => {
  const { login, password } = params

  return async (dispatch) => {
    try {
      dispatch(createAuthLoadingAction())

      const response = await axios.post(AUTH_POST_LOGIN_USER_URI, {
        login,
        password,
      })

      const token = response.data.data.accessToken

      dispatch(createAuthUserLoginedAction({ token }))
    } catch (error: any) {
      const message = error?.message || 'AuthError'

      dispatch(createAuthErrorAction({ message }))
    }
  }
}
