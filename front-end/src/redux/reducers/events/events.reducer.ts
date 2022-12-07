import { EventsActionsTypes, EventsState } from './types'
import { EventsActions } from './actions'

const initialValue: EventsState = {
  error: null,
  tournaments: [
    { id: '1231231', title: 'Some title', message: 'Some message' } as any,
    { id: '1231232', title: 'Some title', message: 'Some message' } as any,
    { id: '1231233', title: 'Some title', message: 'Some message' } as any,
  ],
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

    case EventsActionsTypes.ADD_TOURNAMENT_WINNER_ACTION: {
      return {
        ...state,
        tournaments: state.tournaments.filter(
          (event) => event.id !== payload.id
        ),
      }
    }

    default: {
      return state
    }
  }
}
