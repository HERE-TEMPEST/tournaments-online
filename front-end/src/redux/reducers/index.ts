import { combineReducers } from 'redux'

import { authReducer } from './auth'
import { userReducer } from './user'
import { tournamentsReducer } from './tournaments'

export * from './auth'
export * from './user'
export * from './tournaments'

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  tournaments: tournamentsReducer,
})
