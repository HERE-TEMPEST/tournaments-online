import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import {
  createErrorInFetchingTournamentsAction,
  createFilterTournamentsByNameAction,
  createLoadingTournamentsAction,
  createSetTournamentsAction,
} from '../actions'
import {
  createUriFetchAllTournamentsByRegion,
  URI_FETCH_GET_ALL_TOURNAMENTS,
} from './constants'

export function fetchAllTournamentsByRegion(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      try {
        dispath(createLoadingTournamentsAction())
        const state = getState()

        const response = await axios.get(
          state.tournaments.region === 'global'
            ? URI_FETCH_GET_ALL_TOURNAMENTS
            : createUriFetchAllTournamentsByRegion(state.tournaments.region),
          {
            headers: {
              Authorization: `Bearer ${state.auth.auth?.token}`,
            },
          }
        )

        // await new Promise((r) => setTimeout(r, 2000))

        dispath(createSetTournamentsAction(response.data.data))
        dispath(createFilterTournamentsByNameAction())
      } catch (error: any) {
        console.log(error)
        dispath(createErrorInFetchingTournamentsAction(error.message))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
