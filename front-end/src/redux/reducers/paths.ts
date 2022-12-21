import { SERVER_URI } from '../../config'
import { Region } from '../../types'

export const AUTH_POST_LOGIN_USER_URI = `${SERVER_URI}/login`
export const AUTH_POST_REGISTER_USER_URI = `${SERVER_URI}/registeruser`
export const AUTH_POST_UPLOAD_PROFILE_URI = `${SERVER_URI}/uploadprofile`

export const HOME_GET_LOAD_TOURNAMENTS_URI = `${SERVER_URI}/tournaments`

export const createGetAllTournamentsByRegionUri = (region: Region) => {
  return `${HOME_GET_LOAD_TOURNAMENTS_URI}/by-region/${region}`
}

// export const URI_FETCH_GET_ALL_TOURNAMENTS = `${SERVER_URI}/tournaments`
// export const URI_FETCH_CREATE_NEW_TOURNAMENT = `${SERVER_URI}/tournaments`
// export const URI_FETCH_UPLOAD_TOURNAMENT_PROFILE = `${SERVER_URI}/tournaments`

// export const createUriFetchUploadTournamentProfile = (id: number) => {
//   return `${URI_FETCH_CREATE_NEW_TOURNAMENT}/${id}/uploadprofile`
// }

export const USER_GET_USER_PROFILE_URI = `${SERVER_URI}/getprofile`
export const USER_GET_USER_CREDENTIALS_URI = `${SERVER_URI}/userinfo`

// export const URI_FETCH_UPDATE_USER_CREDENTIALS = `${SERVER_URI}/update-user`
// export const FETCH_POST_UPLOAD_PROFILE = `${SERVER_URI}/uploadprofile`
// export const URI_FETCH_GET_USER_TOURNAMENTS = `${SERVER_URI}/tournaments/member`
