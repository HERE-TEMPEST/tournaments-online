import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { RootState } from '../../../typings'
import {
  AUTH_POST_REGISTER_USER_URI,
  AUTH_POST_UPLOAD_PROFILE_URI,
} from '../../paths'
import {
  createAuthErrorAction,
  createAuthErrorUploadingProfileAction,
  createAuthUserRegisteredAction,
  createAuthLoadingAction,
} from '../actions'

interface AsyncAuthRegisterUserActionParams {
  name: string
  file: any
  surname: string
  login: string
  password: string
  email: string
}

export function createAsyncAuthRegisterUserAction({
  email,
  file,
  login,
  name,
  password,
  surname,
}: AsyncAuthRegisterUserActionParams): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispatch) => {
    try {
      dispatch(createAuthLoadingAction())

      const response = await axios.post(AUTH_POST_REGISTER_USER_URI, {
        email,
        login,
        password,
        name,
        surname,
      })

      const token = response.data.data.accessToken

      if (file) {
        try {
          const formData = new FormData()

          formData.append('profile', file)

          await axios.post(AUTH_POST_UPLOAD_PROFILE_URI, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
        } catch (error: any) {
          const message = error?.message || 'ErrorUplodingProfile'

          dispatch(createAuthErrorUploadingProfileAction({ message }))
        }
      }
      dispatch(createAuthUserRegisteredAction({ token }))
    } catch (error: any) {
      const message = error?.message || 'AuthError'

      dispatch(createAuthErrorAction({ message }))
    }
  }
}
