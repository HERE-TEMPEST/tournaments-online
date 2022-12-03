import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import { createCreateChatSocketAction } from '../actions'

export const createChatSocketAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispath, getStore) => {
    const token = getStore().auth.auth.token

    if (token) {
      dispath(createCreateChatSocketAction({ token }))
    }
  }
}
