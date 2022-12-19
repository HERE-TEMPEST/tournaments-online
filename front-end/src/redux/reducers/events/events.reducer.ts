import { Reducer } from '@reduxjs/toolkit'

import { EventsActionsTypes } from './actions'
import { EventsState, initialEventsState } from './events.state'
import { ActionTokens } from '../tokens'

export const eventsReducer: Reducer<EventsState, EventsActionsTypes> = (
  state = initialEventsState,
  action
) => {
  const { type, payload } = action

  switch (type) {
    case ActionTokens.AUTH_USER_SIGN_OUT_ACTION: {
      return initialEventsState
    }

    default: {
      return state
    }
  }
}
