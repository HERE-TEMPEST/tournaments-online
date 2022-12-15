/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { SERVER_URI } from '../../../../config'

import { RootState } from '../../../typings'
import { createUserLoginedAction } from '../actions'
import { createAuthErrorAction } from '../actions/error.action'

interface AsyncLoginUserActionParams {
  login: string
  password: string
}

export const asyncLoginUserAction = (
  params: AsyncLoginUserActionParams
): ThunkAction<void, RootState, unknown, AnyAction> => {
  const { login, password } = params

  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${SERVER_URI}/login`, {
        login,
        password,
      })

      const token = response.data.data.accessToken

      dispatch(createUserLoginedAction({ token }))
    } catch (error: any) {
      const message = error?.message || 'AuthError'

      dispatch(createAuthErrorAction({ message }))
    }
  }
}
