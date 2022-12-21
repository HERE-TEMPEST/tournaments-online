import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../../../typings'
import {
  createGetAllTournamentsByRegionUri,
  HOME_GET_LOAD_TOURNAMENTS_URI,
} from '../../paths'

import {
  createHomeErrorInLoadingTournamentsAction,
  createHomeLoadedTournamentsAction,
  createHomeLoadingTournamentsAction,
} from '../actions'

export const createAsyncHomeLoadTournamentsAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    try {
      dispatch(createHomeLoadingTournamentsAction())

      const state = getState()
      const region = state.home.region
      const token = state.auth.data.token

      const response = await axios.get(
        region === 'global'
          ? HOME_GET_LOAD_TOURNAMENTS_URI
          : createGetAllTournamentsByRegionUri(region),

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const tournaments = response.data.data

      dispatch(createHomeLoadedTournamentsAction({ tournaments }))
    } catch (error: any) {
      const message = error?.message || 'AuthError'

      dispatch(createHomeErrorInLoadingTournamentsAction({ message }))
    }
  }
}
