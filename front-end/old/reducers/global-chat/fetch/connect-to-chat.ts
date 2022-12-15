import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../typings'
import { createConnectToChatAction } from '../actions'

export const connectToChatAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispath, getStore) => {
    const user = getStore().user.user
    const region = getStore().tournaments.region

    if (user) {
      dispath(
        createConnectToChatAction({
          username: `${user.name || ''} ${user.surname || ''}`.trim(),
          region,
          profileUri:
            user.profile?.uri || location.origin + '/default-profile.png',
        })
      )
    }
  }
}
