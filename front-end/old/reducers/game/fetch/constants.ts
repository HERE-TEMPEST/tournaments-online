import { SERVER_URI } from '../../../config'

export const URI_FETCH_GET_TOURNAMENT = `${SERVER_URI}/tournaments`
export const URI_FETCH_GET_TOURNAMENT_PROFILE = `${SERVER_URI}/tournaments`

export const createUriFetchTournamentById = (id: number) => {
  return `${URI_FETCH_GET_TOURNAMENT}/${id}/info`
}

export const createUriFetchGetTournamentProfile = (id: number) => {
  return `${URI_FETCH_GET_TOURNAMENT_PROFILE}/${id}/getprofile`
}
