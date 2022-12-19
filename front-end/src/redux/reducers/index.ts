import { combineReducers } from 'redux'

import { authReducer } from './auth'
import { eventsReducer } from './events'
// import { tournamentsReducer } from './tournaments'
// import { chatReducer } from './global-chat'
// import { gameReducer } from './game'
// import { eventsReducer } from './events'

export * from './auth'
export * from './events'
// export * from './tournaments'
// export * from './global-chat'
// export * from './game'
// export * from './events'

export const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  // user: userReducer,
  // game: gameReducer,
  // events: eventsReducer,
  // tournaments: tournamentsReducer,
  // chat: chatReducer,
})
