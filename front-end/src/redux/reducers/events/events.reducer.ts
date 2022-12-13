import { EventsActionsTypes, EventsState } from './types'
import { EventsActions } from './actions'

const initialValue: EventsState = {
  error: null,
  tournaments: [],
}

export const eventsReducer = (
  state: EventsState = initialValue,
  action: EventsActions
): EventsState => {
  const { payload, type } = action

  switch (type) {
    case EventsActionsTypes.ADD_TOURNAMENT_WINNER_ACTION: {
      return {
        ...state,
        tournaments: [...state.tournaments, { ...payload, type: 'winner' }],
      }
    }

    case EventsActionsTypes.DELETE_TOURNAMENT_WINNER_ACTION: {
      return {
        ...state,
        tournaments: state.tournaments.filter(
          (event) => event.id !== payload.id
        ),
      }
    }

    case EventsActionsTypes.SIGNOUT_USER_ACTION: {
      return {
        ...state,
        tournaments: [],
      }
    }

    default: {
      return state
    }
  }
}
