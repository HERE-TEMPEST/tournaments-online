import { combineReducers } from 'redux'
import { authReducer } from './auth'

import { userReducer } from './user'

export * from './auth'
export * from './user'

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
})
