// import {  } from './actions'
import { TournamentsActions } from './actions'
import { TournamentsActionsTypes, TournamentsState } from './types'

const initialValue: TournamentsState = {
  loading: false,
  error: '',
  region: 'ca-central',
  tournaments: [],
  filteredTournaments: [],
  filters: {
    name: '',
  },
}

export const tournamentsReducer = (
  state: TournamentsState = initialValue,
  action: TournamentsActions
): TournamentsState => {
  const { payload, type } = action

  switch (type) {
    case TournamentsActionsTypes.CHANGE_REGION_ACTION: {
      return { ...state, region: payload }
    }

    case TournamentsActionsTypes.SET_TOURNAMENTS_ACTION: {
      return {
        ...state,
        error: '',
        loading: false,
        tournaments: payload,
        filteredTournaments: payload,
      }
    }

    case TournamentsActionsTypes.ERROR_IN_FETCHING_TOURNAMENTS: {
      return { ...state, error: payload, loading: false, tournaments: [] }
    }

    case TournamentsActionsTypes.CHANGE_FILTER_NAME_ACTION: {
      return {
        ...state,
        filters: {
          ...state.filters,
          name: payload,
        },
        filteredTournaments: state.tournaments.filter((tournament) =>
          tournament.name.toLowerCase().includes(payload.toLowerCase())
        ),
      }
    }

    case TournamentsActionsTypes.FILTER_TOURNAMENTS_BY_NAME_ACTION: {
      return {
        ...state,
        filteredTournaments: state.tournaments.filter((tournament) =>
          tournament.name
            .toLowerCase()
            .includes(state.filters.name.toLowerCase())
        ),
      }
    }

    case TournamentsActionsTypes.LOADING_TOURNAMENTS_ACTION: {
      return { ...state, error: '', loading: true, tournaments: [] }
    }

    default: {
      return state
    }
  }
}
