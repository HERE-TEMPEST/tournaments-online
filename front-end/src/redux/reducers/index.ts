import { combineReducers } from 'redux'
import { ActionInterface } from '../action'

const initialState = {
  users: [],
}

const userReducer = (
  state: any = initialState,
  action: ActionInterface<any>
) => {
  const { type } = action

  switch (type) {
    case Symbol.for('asd'):
      return state

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  users: userReducer,
})
