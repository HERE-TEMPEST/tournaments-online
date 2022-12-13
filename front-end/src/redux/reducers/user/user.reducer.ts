import { UserActions } from './actions'
import { UserActionsTypes, UserState } from './types'

const initialValue: UserState = {
  loading: false,
  loadingTournaments: false,
  errorInFetchingTournaments: null,
  errors: {
    create: null,
    update: null,
    fetch: null,
  },
  user: null,
  tournaments: null,
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
        ...state,
        loading: true,
        errors: { create: null, update: null, fetch: null },
        user: null,
      }
    }

    case 'SIGNOUT_USER_ACTION': {
      return {
        ...state,
        loading: true,
        errors: { create: null, update: null, fetch: null },
        user: null,
      }
    }

    case UserActionsTypes.USER_INFO_WAS_LOADED_ACTION: {
      return {
        ...state,
        loading: false,
        errors: { create: null, update: null, fetch: null },
        user: payload,
      }
    }

    case UserActionsTypes.ERROR_IN_FETCHING_USER_CRED: {
      return {
        ...state,
        loading: false,
        errors: { create: null, fetch: payload, update: null },
        user: null,
      }
    }

    case UserActionsTypes.LOADING_USER_TOURNAMENTS_ACTION: {
      return {
        ...state,
        loadingTournaments: true,
        errorInFetchingTournaments: null,
      }
    }

    case UserActionsTypes.USER_TOURNAMENTS_WAS_LOADED_ACTION: {
      const { tournaments } = payload

      return {
        ...state,
        errorInFetchingTournaments: null,
        tournaments,
        loadingTournaments: false,
      }
    }

    case UserActionsTypes.ERROR_IN_FETCHING_USER_TOURNAMENTS_ACTION: {
      const { message } = payload

      return {
        ...state,
        tournaments: null,
        errorInFetchingTournaments: message,
        loadingTournaments: false,
      }
    }

    case UserActionsTypes.SIGNOUT_USER_ACTION: {
      return {
        loading: false,
        loadingTournaments: false,
        errors: {
          create: null,
          update: null,
          fetch: null,
        },
        user: null,
        errorInFetchingTournaments: null,
        tournaments: null,
      }
    }

    default: {
      return state
    }
  }
}
