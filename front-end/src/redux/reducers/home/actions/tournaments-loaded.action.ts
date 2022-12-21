import { PayloadAction } from '@reduxjs/toolkit'
import { ITournament } from '../../../../models'

import { TypesActions } from '../../actions.type'

interface HomeLoadedTournamentsActionPayload {
  tournaments: Array<ITournament>
}

export type HomeLoadedTournamentsAction = PayloadAction<
  HomeLoadedTournamentsActionPayload,
  TypesActions.HOME_LOADED_TOURNAMENTS_ACTION
>

export const createHomeLoadedTournamentsAction = (
  payload: HomeLoadedTournamentsActionPayload
) => {
  return {
    type: TypesActions.HOME_LOADED_TOURNAMENTS_ACTION,
    payload,
  }
}
