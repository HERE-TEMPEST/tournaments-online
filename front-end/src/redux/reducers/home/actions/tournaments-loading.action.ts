import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type HomeLoadingTournamentsActionPayload = undefined

export type HomeLoadingTournamentsAction = PayloadAction<
  HomeLoadingTournamentsActionPayload,
  TypesActions.HOME_LOADING_TOURNAMENTS_ACTION
>

export const createHomeLoadingTournamentsAction: ActionCreator<
  HomeLoadingTournamentsAction
> = (payload: HomeLoadingTournamentsActionPayload = undefined) => {
  return {
    type: TypesActions.HOME_LOADING_TOURNAMENTS_ACTION,
    payload,
  }
}
