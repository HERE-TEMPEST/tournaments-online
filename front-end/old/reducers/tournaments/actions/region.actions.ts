import { Region } from '../../../../types'
import { TournamentsActionsTypes } from '../types'

export interface ChangeRegionAction {
  type: `${TournamentsActionsTypes.CHANGE_REGION_ACTION}`
  payload: Region
}

export const createChangeRegionAction = (
  payload: Region
): ChangeRegionAction => {
  return {
    type: `${TournamentsActionsTypes.CHANGE_REGION_ACTION}`,
    payload: payload,
  }
}
