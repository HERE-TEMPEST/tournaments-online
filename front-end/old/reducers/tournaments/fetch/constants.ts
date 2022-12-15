import { Region } from '../../../../types'
import { SERVER_URI } from '../../../config'

export const URI_FETCH_GET_ALL_TOURNAMENTS = `${SERVER_URI}/tournaments`
export const URI_FETCH_CREATE_NEW_TOURNAMENT = `${SERVER_URI}/tournaments`
export const URI_FETCH_UPLOAD_TOURNAMENT_PROFILE = `${SERVER_URI}/tournaments`

export const createUriFetchAllTournamentsByRegion = (region: Region) => {
  return `${URI_FETCH_GET_ALL_TOURNAMENTS}/by-region/${region}`
}

export const createUriFetchUploadTournamentProfile = (id: number) => {
  return `${URI_FETCH_CREATE_NEW_TOURNAMENT}/${id}/uploadprofile`
}
