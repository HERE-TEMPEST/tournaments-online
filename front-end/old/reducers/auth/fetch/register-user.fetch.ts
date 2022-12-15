import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import { createRegisterUserAction } from '../actions'
import {
  FETCH_POST_REGISTER_USER,
  FETCH_POST_UPLOAD_PROFILE,
} from './constants'

interface FetchRegisterUserParams {
  name: string
  file: any
  surname: string
  login: string
  password: string
  email: string
}

export function fetchRegisterUser({
  email,
  file,
  login,
  name,
  password,
  surname,
}: FetchRegisterUserParams): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispath) => {
    try {
      const response = await axios.post(FETCH_POST_REGISTER_USER, {
        email,
        login,
        password,
        name,
        surname,
      })

      const token = response.data.data.accessToken

      dispath(createRegisterUserAction({ token }))

      if (file) {
        const formData = new FormData()

        formData.append('profile', file)

        await axios.post(FETCH_POST_UPLOAD_PROFILE, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
