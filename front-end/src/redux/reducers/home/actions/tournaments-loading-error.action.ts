import { PayloadAction, ActionCreator } from '@reduxjs/toolkit'

import { TypesActions } from '../../actions.type'

type HomeErrorInLoadingTournamentsActionPayload = {
  message: string
}

export type HomeErrorInLoadingTournamentsAction = PayloadAction<
  HomeErrorInLoadingTournamentsActionPayload,
  TypesActions.HOME_ERROR_IN_LOADING_TOURNAMENTS_ACTION
>

export const createHomeErrorInLoadingTournamentsAction: ActionCreator<
  HomeErrorInLoadingTournamentsAction
> = (payload: HomeErrorInLoadingTournamentsActionPayload) => {
  return {
    type: TypesActions.HOME_ERROR_IN_LOADING_TOURNAMENTS_ACTION,
    payload,
  }
}
