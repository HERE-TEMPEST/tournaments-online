import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ITournament } from '../../../../models'
import { RootState } from '../../../typings'
import {
  createErrorFetchTournamentInfoAction,
  createFetchTournamentInfoAction,
  createJoinToTournamentAction,
} from '../actions'
import { createUriFetchTournamentById } from './constants'

interface FetchTournamentInfoParams {
  tournamentId: number
}

export function fetchTournamentInfo({
  tournamentId,
}: FetchTournamentInfoParams): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      dispath(createFetchTournamentInfoAction(undefined))
      const state = getState()

      const token = state.auth.auth.token
      const user = state.user.user

      const response = await axios.get(
        createUriFetchTournamentById(tournamentId),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const tournament: ITournament = response.data.data

      dispath(
        createJoinToTournamentAction({
          tournament,
          token,
          user: {
            username: `${user?.name || ''} ${user?.surname || ''}`.trim(),
            profileUri:
              user?.profile?.uri || location.origin + '/default-profile.png',
          },
        })
      )
      // try {
      //   const profile = await axios.get(createUriFetchGetTournamentProfile(tournament.id), {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      // } catch (error: any) {
      //   console.log(error)
      // }
    } catch (error: any) {
      console.log('Error in fetching: ', error)
      dispath(createErrorFetchTournamentInfoAction(error.message))
    }
  }
}
