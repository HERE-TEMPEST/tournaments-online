import { AddTournamentWinnerAction } from './add-tournaments-event.action'
import { DeleteTournamentWinnerAction } from './delete-tournaments-event.action'

export type EventsActions =
  | AddTournamentWinnerAction
  | DeleteTournamentWinnerAction
