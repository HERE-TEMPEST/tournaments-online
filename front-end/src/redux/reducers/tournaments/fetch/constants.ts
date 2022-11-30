import { Region } from '../../../../types'
import { SERVER_URI } from '../../../config'

export const URI_FETCH_GET_ALL_TOURNAMENTS = `${SERVER_URI}/tournaments`

export const createUriFetchAllTournamentsByRegion = (region: Region) => {
  return `${URI_FETCH_GET_ALL_TOURNAMENTS}/${region}`
}
