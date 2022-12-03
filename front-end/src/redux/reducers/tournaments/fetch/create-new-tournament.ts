import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IProfile, ITournament } from '../../../../models'
import { RootState } from '../../../typings'
import {
  createJoinToTournamentAction,
  createInitTournamentProfileAction,
} from '../../game'
import {
  createCreateNewTournamentAction,
  createErrorInCreatingNewTournamentAction,
  createSuccessCreatingNewTournamentAction,
} from '../actions'
import {
  URI_FETCH_CREATE_NEW_TOURNAMENT,
  createUriFetchUploadTournamentProfile,
} from './constants'

interface FetchCreateNewTournamentParams {
  callback: (error: string | null, data: ITournament | null) => void
  payload: {
    tournament: ITournament
    profile: any
  }
}

export function fetchCreateNewTournament({
  callback,
  payload,
}: FetchCreateNewTournamentParams): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispath, getState) => {
    try {
      try {
        dispath(createCreateNewTournamentAction(undefined))
        const state = getState()

        const token = state.auth.auth?.token

        const response = await axios.post(
          URI_FETCH_CREATE_NEW_TOURNAMENT,
          { ...payload.tournament },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        const tournament: ITournament = response.data.data

        dispath(createSuccessCreatingNewTournamentAction(undefined))
        dispath(createJoinToTournamentAction(tournament))

        if (payload.profile) {
          const formData = new FormData()

          formData.append('profile', payload.profile)

          try {
            const res = await axios.post(
              createUriFetchUploadTournamentProfile(tournament.id),
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
                },
              }
            )

            const file: IProfile = res.data.data

            dispath(createInitTournamentProfileAction(file))
          } catch (error: any) {
            console.log(error)
          }
        }

        callback(null, tournament)
      } catch (error: any) {
        console.log(error)
        dispath(createErrorInCreatingNewTournamentAction(error.message))
        callback(error.message, null)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
