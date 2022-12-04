import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import { createErrorInUpdatingUserCredentialsAction } from '../actions'
import {
  FETCH_POST_UPLOAD_PROFILE,
  URI_FETCH_UPDATE_USER_CREDENTIALS,
} from './constants'
import { fetchUserInfo } from './user-credentials.fetch'

interface UpdateUserInfoFetchParams {
  properties: {
    email: string
    password: string
    name: string
    surname: string
    [key: string]: string
  }
  profile: any
}

export function updateUserInfoFetch({
  profile,
  properties,
}: UpdateUserInfoFetchParams): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      const token = getState().auth.auth.token

      const data: { [key: string]: string } = {}

      for (const key of Object.keys(properties)) {
        if (properties[key]) {
          data[key] = properties[key]
        }
      }

      await axios.patch(URI_FETCH_UPDATE_USER_CREDENTIALS, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (profile) {
        try {
          const formData = new FormData()

          formData.append('profile', profile)

          await axios.post(FETCH_POST_UPLOAD_PROFILE, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
        } catch (error: any) {
          dispath(
            createErrorInUpdatingUserCredentialsAction(
              error?.message || 'UnauthorizedException'
            )
          )
        }
      }

      dispath(fetchUserInfo())
    } catch (error: any) {
      console.log(error)
      dispath(
        createErrorInUpdatingUserCredentialsAction(
          error?.message || 'UnauthorizedException'
        )
      )
    }
  }
}
