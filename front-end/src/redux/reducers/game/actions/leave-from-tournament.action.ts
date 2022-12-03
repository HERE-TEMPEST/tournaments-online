import { GameActionsTypes } from '../types'

export interface LeaveFromTournamentAction {
  type: `${GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION}`
  payload: undefined
}

export const createLeaveFromTournamentAction = (
  payload: undefined
): LeaveFromTournamentAction => {
  return {
    type: `${GameActionsTypes.LEAVE_FROM_TOURNAMENT_ACTION}`,
    payload,
  }
}
