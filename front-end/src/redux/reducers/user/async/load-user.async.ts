import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../../../typings'
import {
  USER_GET_USER_CREDENTIALS_URI,
  USER_GET_USER_PROFILE_URI,
} from '../../paths'

import {
  createUserErrorInLoadingUserInfoAction,
  createUserLoadedUserInfoAction,
  createUserLoadingUserInfoAction,
} from '../actions'

export const createAsyncUserLoadUserInfoAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    try {
      dispatch(createUserLoadingUserInfoAction())

      const state = getState()
      const token = state.auth.data.token

      const response = await axios.get(USER_GET_USER_CREDENTIALS_URI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const credentials = response.data.data

      const responseProfile = await axios.get(USER_GET_USER_PROFILE_URI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      dispatch(
        createUserLoadedUserInfoAction({
          user: { ...credentials, profile: responseProfile.data.data },
        })
      )
    } catch (error: any) {
      const message = error?.message || 'AuthError'

      dispatch(createUserErrorInLoadingUserInfoAction({ message }))
    }
  }
}
