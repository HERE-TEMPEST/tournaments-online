import { combineReducers } from 'redux'

import { authReducer } from './auth'
import { userReducer } from './user'
import { tournamentsReducer } from './tournaments'
import { chatReducer } from './global-chat'
import { gameReducer } from './game'
import { eventsReducer } from './events'

export * from './auth'
export * from './user'
export * from './tournaments'
export * from './global-chat'
export * from './game'
export * from './events'

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  events: eventsReducer,
  auth: authReducer,
  tournaments: tournamentsReducer,
  chat: chatReducer,
})
