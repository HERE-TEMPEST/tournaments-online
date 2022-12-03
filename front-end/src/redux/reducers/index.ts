import { combineReducers } from 'redux'

import { authReducer } from './auth'
import { userReducer } from './user'
import { tournamentsReducer } from './tournaments'
import { chatReducer } from './global-chat'

export * from './auth'
export * from './user'
export * from './tournaments'
export * from './global-chat'

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  tournaments: tournamentsReducer,
  chat: chatReducer,
})
