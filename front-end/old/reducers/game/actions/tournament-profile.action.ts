import { IProfile } from '../../../../models'
import { GameActionsTypes } from '../types'

export interface InitTournamentProfileAction {
  type: `${GameActionsTypes.INIT_TOURNAMENT_PROFILE_ACTION}`
  payload: IProfile
}

export const createInitTournamentProfileAction = (
  payload: IProfile
): InitTournamentProfileAction => {
  return {
    type: `${GameActionsTypes.INIT_TOURNAMENT_PROFILE_ACTION}`,
    payload,
  }
}
