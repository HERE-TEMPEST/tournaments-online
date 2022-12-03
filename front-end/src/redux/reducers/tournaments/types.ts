import { ITournament } from '../../../models'
import { Region } from '../../../types'

export interface TournamentsState {
  tournaments: Array<ITournament>
  filteredTournaments: Array<ITournament>
  filters: {
    name: string
  }
  region: Region
  loading: boolean
  error: string
  newTournamentAction: {
    loading: boolean
    error: string
  }
}

export enum TournamentsActionsTypes {
  CHANGE_REGION_ACTION = 'CHANGE_REGION_ACTION',
  CHANGE_FILTER_NAME_ACTION = 'CHANGE_FILTER_NAME_ACTION',
  SET_TOURNAMENTS_ACTION = 'SET_TOURNAMENTS_ACTION',
  ERROR_IN_FETCHING_TOURNAMENTS = 'ERROR_IN_FETCHING_TOURNAMENTS',
  LOADING_TOURNAMENTS_ACTION = 'LOADING_TOURNAMENTS_ACTION',
  FILTER_TOURNAMENTS_BY_NAME_ACTION = 'FILTER_TOURNAMENTS_BY_NAME_ACTION',
  CREATE_NEW_TOURNAMENT_ACTION = 'CREATE_NEW_TOURNAMENT_ACTION',
  CREATE_NEW_TOURNAMENT_ERROR_ACTION = 'CREATE_NEW_TOURNAMENT_ERROR_ACTION',
  CREATE_NEW_TOURNAMENT_SUCCESS_ACTION = 'CREATE_NEW_TOURNAMENT_SUCCESS_ACTION',
}
