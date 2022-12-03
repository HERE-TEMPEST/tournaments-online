// import {  } from './actions'
import { GameActions } from './actions'
import { GameActionsTypes, GameState } from './types'

const initialValue: GameState = {
  error: '',
  tournament: null,
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
        tournament: payload,
      }
    }

    case GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION: {
      return {
        ...state,
        error: '',
        tournament: null,
      }
    }

    case GameActionsTypes.INIT_TOURNAMENT_PROFILE_ACTION: {
      if (state.tournament) {
        return {
          ...state,
          error: '',
          tournament: {
            ...state.tournament,
            profile: payload,
          },
        }
      }

      return state
    }

    default: {
      return state
    }
  }
}
