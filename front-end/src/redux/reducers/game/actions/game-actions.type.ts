import { JoinToTournamentAction } from './join-to-tournament.action'
import { LeaveFromTournamentAction } from './leave-from-tournament.action'
import { InitTournamentProfileAction } from './tournament-profile.action'

export type GameActions =
  | JoinToTournamentAction
  | InitTournamentProfileAction
  | LeaveFromTournamentAction
