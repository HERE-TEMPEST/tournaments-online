import { configureStore } from '@reduxjs/toolkit'
import { IUser } from '../models'

import { rootReducer } from './reducers'

export const store = configureStore({ reducer: rootReducer })

export interface IStore {
  user: IUser
}
