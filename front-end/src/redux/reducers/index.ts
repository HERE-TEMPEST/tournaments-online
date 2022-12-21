import { combineReducers } from 'redux'

import { authReducer } from './auth'
import { eventsReducer } from './events'
import { homeReducer } from './home'
import { userReducer } from './user'
// import { tournamentsReducer } from './tournaments'
// import { chatReducer } from './global-chat'
// import { gameReducer } from './game'
// import { eventsReducer } from './events'

export * from './auth'
export * from './events'
export * from './home'
export * from './user'
// export * from './tournaments'
// export * from './global-chat'
// export * from './game'
// export * from './events'

export const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  home: homeReducer,
  user: userReducer,
  // user: userReducer,
  // game: gameReducer,
  // events: eventsReducer,
  // tournaments: tournamentsReducer,
  // chat: chatReducer,
})
