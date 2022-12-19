export interface EventsState {
  events: Array<any>
  error: string | undefined
  loading: boolean
}

export const initialEventsState: EventsState = {
  events: [],
  loading: false,
  error: undefined,
}
