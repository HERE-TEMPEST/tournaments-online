import { ITournament } from '../../../../models'
import { UserActionsTypes } from '../types'

export interface IsFetchingUserTournamentsAction {
  type: `${UserActionsTypes.LOADING_USER_TOURNAMENTS_ACTION}`
  payload: undefined
}

export const createFetchingUserTournamentsAction =
  (): IsFetchingUserTournamentsAction => {
    return {
      type: `${UserActionsTypes.LOADING_USER_TOURNAMENTS_ACTION}`,
      payload: undefined,
    }
  }

interface UserTournamentsFetchedActionPayload {
  tournaments: Array<ITournament>
}

export interface UserTournamentsFetchedAction {
  type: `${UserActionsTypes.USER_TOURNAMENTS_WAS_LOADED_ACTION}`
  payload: UserTournamentsFetchedActionPayload
}

export const createUserTournamentsWasLoadedAction = (
  payload: UserTournamentsFetchedActionPayload
): UserTournamentsFetchedAction => {
  return {
    type: `${UserActionsTypes.USER_TOURNAMENTS_WAS_LOADED_ACTION}`,
    payload: payload,
  }
}

interface ErrorInFetchingUserTournamentsActionPayload {
  message: string
}

export interface ErrorInFetchingUserTournamentsAction {
  type: `${UserActionsTypes.ERROR_IN_FETCHING_USER_TOURNAMENTS_ACTION}`
  payload: ErrorInFetchingUserTournamentsActionPayload
}

export const createErrorInFetchingUserTournamentsAction = (
  payload: ErrorInFetchingUserTournamentsActionPayload
): ErrorInFetchingUserTournamentsAction => {
  return {
    type: `${UserActionsTypes.ERROR_IN_FETCHING_USER_TOURNAMENTS_ACTION}`,
    payload,
  }
}
