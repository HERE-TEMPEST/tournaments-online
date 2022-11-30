import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import {
  createErrorInFetchingUserCredentialsAction,
  createFetchingUserCredentialsAction,
  createUserCredentialsWasLoadedAction,
} from '../actions'
import {
  URI_FETCH_GET_USER_CREDENTIALS,
  URI_FETCH_GET_USER_PROFILE,
} from './constants'

// interface FetchUserInfoParams {
// }

export function fetchUserInfo(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      const token = getState().auth.auth.token

      dispath(createFetchingUserCredentialsAction())

      await new Promise((r) => setTimeout(r, 3000))

      const response = await axios.get(URI_FETCH_GET_USER_CREDENTIALS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const credentials = response.data.data

      const responseProfile = await axios.get(URI_FETCH_GET_USER_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      dispath(
        createUserCredentialsWasLoadedAction({
          ...credentials,
          profile: responseProfile.data.data,
        })
      )
    } catch (error: any) {
      console.log(error)
      dispath(
        createErrorInFetchingUserCredentialsAction(
          error?.message || 'UnauthorizedException'
        )
      )
    }
  }
}
