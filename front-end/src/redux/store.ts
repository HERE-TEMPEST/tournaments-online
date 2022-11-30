/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers'

export const store = configureStore({ reducer: rootReducer })
