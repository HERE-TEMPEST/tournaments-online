import { Reducer } from '@reduxjs/toolkit'

import { HomeActionsTypes } from './actions'
import { HomeState, initialHomeState } from './home.state'
import { TypesActions } from '../actions.type'
import { ITournament, ITournamentsFilters } from '../../../models'

export const homeReducer: Reducer<HomeState, HomeActionsTypes> = (
  state = initialHomeState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case TypesActions.HOME_NEW_MESSAGE_FROM_USER_ACTION: {
      return {
        ...state,
        chat: {
          error: undefined,
          loading: false,
          messages: [...state.chat.messages, payload],
        },
      }
    }

    case TypesActions.HOME_LOADING_TOURNAMENTS_ACTION: {
      return {
        ...state,
        filters: {
          ...state.filters,
          filteredTournaments: [],
        },
        tournaments: {
          data: [],
          error: undefined,
          loading: true,
        },
      }
    }

    case TypesActions.HOME_LOADED_TOURNAMENTS_ACTION: {
      const { tournaments } = payload

      const filters = state.filters

      return {
        ...state,
        filters: {
          ...state.filters,
          filteredTournaments: applyFilters(filters, tournaments),
        },
        tournaments: {
          data: tournaments,
          error: undefined,
          loading: false,
        },
      }
    }

    case TypesActions.HOME_ERROR_IN_LOADING_TOURNAMENTS_ACTION: {
      const { message } = payload

      return {
        ...state,
        filters: {
          ...state.filters,
          filteredTournaments: [],
        },
        tournaments: {
          data: [],
          error: message,
          loading: false,
        },
      }
    }

    case TypesActions.HOME_CHANGE_FILTERS_ACTION: {
      const { filters } = payload

      return {
        ...state,
        filters: {
          ...state.filters,
          ...filters,
          filteredTournaments: applyFilters(filters, state.tournaments.data),
        },
      }
    }

    case TypesActions.HOME_CHANGE_REGION_ACTION: {
      const { region } = payload
      return {
        ...state,
        region,
      }
    }

    case TypesActions.AUTH_USER_SIGN_OUT_ACTION: {
      return initialHomeState
    }

    default: {
      return state
    }
  }
}

function applyFilters(
  filters: ITournamentsFilters,
  tournaments: Array<ITournament>
): Array<ITournament> {
  const { searchLine } = filters

  return tournaments.filter((tournament) =>
    tournament.name.toLowerCase().includes((searchLine || '').toLowerCase())
  )
}
