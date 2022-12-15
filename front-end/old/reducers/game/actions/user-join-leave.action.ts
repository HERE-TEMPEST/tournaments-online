import { GameActionsTypes } from '../types'

export interface UserJoinToTournamentAction {
  type: `${GameActionsTypes.USER_JOIN_ACTION}`
  payload: undefined
}

export const createUserJoinToTournamentAction = (
  payload: undefined
): UserJoinToTournamentAction => {
  return {
    type: `${GameActionsTypes.USER_JOIN_ACTION}`,
    payload,
  }
}

export interface UserLeaveFromTournamentAction {
  type: `${GameActionsTypes.USER_LEAVE_ACTION}`
  payload: undefined
}

export const createUserLeaveFromTournamentAction = (
  payload: undefined
): UserLeaveFromTournamentAction => {
  return {
    type: `${GameActionsTypes.USER_LEAVE_ACTION}`,
    payload,
  }
}
