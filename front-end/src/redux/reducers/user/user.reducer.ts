import { UserActions } from './actions'
import { UserActionsTypes, UserState } from './types'

const initialValue: UserState = {
  loading: false,
  errors: {
    create: null,
    update: null,
    fetch: null,
  },
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
      return {
        loading: true,
        errors: { create: null, update: null, fetch: null },
        user: null,
      }
    }

    case 'SIGNOUT_USER_ACTION': {
      return {
        loading: true,
        errors: { create: null, update: null, fetch: null },
        user: null,
      }
    }

    case UserActionsTypes.USER_INFO_WAS_LOADED_ACTION: {
      return {
        loading: false,
        errors: { create: null, update: null, fetch: null },
        user: payload,
      }
    }

    case UserActionsTypes.ERROR_IN_FETCHING_USER_CRED: {
      return {
        loading: false,
        errors: { create: null, fetch: payload, update: null },
        user: null,
      }
    }

    default: {
      return state
    }
  }
}
