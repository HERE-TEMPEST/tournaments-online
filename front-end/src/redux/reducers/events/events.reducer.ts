import { EventsActionsTypes, EventsState } from './types'

const initialValue: EventsState = {
  error: null,
  events: [],
}

export const eventsReducer = (
  state: EventsState = initialValue,
  action: { type: string; payload: any }
) => {
  const { payload, type } = action

  switch (type) {
    default: {
      return state
    }
  }
}
