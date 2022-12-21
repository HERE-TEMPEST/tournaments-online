import { PayloadAction } from '@reduxjs/toolkit'

import { Region } from '../../../../types'
import { TypesActions } from '../../actions.type'

interface HomeChangeRegionActionPayload {
  region: Region
}

export type HomeChangeRegionAction = PayloadAction<
  HomeChangeRegionActionPayload,
  TypesActions.HOME_CHANGE_REGION_ACTION
>

export const createHomeChangeRegionAction = (
  payload: HomeChangeRegionActionPayload
): HomeChangeRegionAction => {
  return {
    type: TypesActions.HOME_CHANGE_REGION_ACTION,
    payload,
  }
}
