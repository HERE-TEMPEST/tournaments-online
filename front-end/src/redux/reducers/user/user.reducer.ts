import { UserActions } from './actions'
import { UserActionsTypes, UserState } from './types'

const initialValue: UserState = {
  loading: false,
  error: '',
  user: null,
}

export const userReducer = (
  state: UserState = initialValue,
  action: UserActions
): UserState => {
  const { payload, type } = action

  switch (type) {
    case UserActionsTypes.LOADING_USER_INFO_ACTION: {
      payload
      return { loading: true, error: '', user: null }
    }

    case UserActionsTypes.USER_INFO_WAS_LOADED_ACTION: {
      return { loading: false, error: '', user: payload }
    }

    case UserActionsTypes.ERROR_IN_FETCHING_USER_CRED: {
      return { loading: false, error: payload, user: null }
    }

    default: {
      return state
    }
  }
}
