import { v1 } from 'uuid'

import { ITournamentEvent } from '../../../../models'
import { EventsActionsTypes } from '../types'

type AddTournamentWinnerActionPayload = Omit<ITournamentEvent, 'type' | 'id'>
type AddTournamentWinnerActionResult = Omit<ITournamentEvent, 'type'>

export interface AddTournamentWinnerAction {
  type: `${EventsActionsTypes.ADD_TOURNAMENT_WINNER_ACTION}`
  payload: AddTournamentWinnerActionResult
}

export const createAddTournamentWinnerAction = (
  payload: AddTournamentWinnerActionPayload
): AddTournamentWinnerAction => {
  const id = v1()
  return {
    type: `${EventsActionsTypes.ADD_TOURNAMENT_WINNER_ACTION}`,
    payload: { ...payload, id },
  }
}
