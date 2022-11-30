import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import { createLoginUserAction } from '../actions'
import { FETCH_POST_LOGIN_USER } from './constants'

interface FetchLoginUserParams {
  login: string
  password: string
}

export function fetchLoginUser({
  login,
  password,
}: FetchLoginUserParams): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispath) => {
    try {
      const response = await axios.post(FETCH_POST_LOGIN_USER, {
        login,
        password,
      })

      const token = response.data.data.accessToken

      dispath(createLoginUserAction({ token }))
    } catch (error) {
      console.log(error)
    }
  }
}
