// import {  } from './actions'
import { GameActions } from './actions'
import { GameActionsTypes, GameState } from './types'

const initialValue: GameState = {
  error: '',
  tournament: null,
  loading: false,
}

export const gameReducer = (
  state: GameState = initialValue,
  action: GameActions
): GameState => {
  const { payload, type } = action

  switch (type) {
    case GameActionsTypes.JOIN_TO_TOURNAMENT_ACTION: {
      return {
        error: '',
        loading: false,
        tournament: {
          ...payload,
          profile: {
            key: payload?.profile?.key || '',
            uri: payload?.profile?.uri || location.origin + '/1.jpg',
          },
        },
      }
    }

    case GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION: {
      return {
        ...state,
        loading: false,
        error: '',
        tournament: null,
      }
    }

    case GameActionsTypes.ERROR_FETCH_TOURNAMENT_INFO_ACTION: {
      return {
        ...state,
        loading: false,
        error: payload,
        tournament: null,
      }
    }

    case GameActionsTypes.INIT_TOURNAMENT_PROFILE_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          loading: false,
          error: '',
          tournament: {
            ...state.tournament,
            profile: payload,
          },
        }
      }

      return state
    }

    case GameActionsTypes.FETCH_TOURNAMENT_INFO_ACTION: {
      return {
        tournament: null,
        error: '',
        loading: true,
      }
    }

    default: {
      return state
    }
  }
}
