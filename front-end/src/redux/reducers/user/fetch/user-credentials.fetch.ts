import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import {
  createErrorInFetchingUserCredentialsAction,
  createFetchingUserCredentialsAction,
  createUserCredentialsWasLoadedAction,
} from '../actions'
import { URI_FETCH_GET_USER_CREDENTIALS } from './constants'

interface FetchUserInfoParams {
  token: string
}

export function fetchUserInfo({
  token,
}: FetchUserInfoParams): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispath) => {
    try {
      dispath(createFetchingUserCredentialsAction())

      const response = await axios.get(URI_FETCH_GET_USER_CREDENTIALS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const credentials = response.data.data

      console.log(credentials)

      dispath(createUserCredentialsWasLoadedAction({ ...credentials }))
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
