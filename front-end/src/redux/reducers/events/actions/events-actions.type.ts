import { SignOutUserAction } from '../../auth/actions/sign-out.action'
import { AddTournamentWinnerAction } from './add-tournaments-event.action'
import { DeleteTournamentWinnerAction } from './delete-tournaments-event.action'

export type EventsActions =
  | AddTournamentWinnerAction
  | DeleteTournamentWinnerAction
  | SignOutUserAction
