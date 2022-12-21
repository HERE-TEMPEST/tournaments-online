import { PayloadAction } from '@reduxjs/toolkit'

import { ITournamentsFilters } from '../../../../models'
import { TypesActions } from '../../actions.type'

interface HomeChangeTournamentsFiltersActionPayload {
  filters: ITournamentsFilters
}

export type HomeChangeTournamentsFiltersAction = PayloadAction<
  HomeChangeTournamentsFiltersActionPayload,
  TypesActions.HOME_CHANGE_FILTERS_ACTION
>

export const createHomeChangeTournamentsFiltersAction = (
  payload: HomeChangeTournamentsFiltersActionPayload
): HomeChangeTournamentsFiltersAction => {
  return {
    type: TypesActions.HOME_CHANGE_FILTERS_ACTION,
    payload,
  }
}
