import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import {
  createFetchingUserTournamentsAction,
  createErrorInFetchingUserTournamentsAction,
  createUserTournamentsWasLoadedAction,
} from '../actions'
import { URI_FETCH_GET_USER_TOURNAMENTS } from './constants'

// interface FetchUserInfoParams {
// }

export function fetchUserTournaments(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      const token = getState().auth.auth.token

      dispath(createFetchingUserTournamentsAction())

      const response = await axios.get(URI_FETCH_GET_USER_TOURNAMENTS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const tournaments = response.data.data

      dispath(
        createUserTournamentsWasLoadedAction({
          tournaments,
        })
      )
    } catch (error: any) {
      console.log(error)
      dispath(
        createErrorInFetchingUserTournamentsAction(
          error?.message || 'UnauthorizedException'
        )
      )
    }
  }
}
