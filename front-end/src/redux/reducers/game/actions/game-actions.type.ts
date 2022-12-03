import { ErrorFetchTournamentInfoAction } from './error-fetch-tournament-info.action'
import { FetchTournamentInfoAction } from './fetch-tournament-info.action'
import { JoinToTournamentAction } from './join-to-tournament.action'
import { LeaveFromTournamentAction } from './leave-from-tournament.action'
import { InitTournamentProfileAction } from './tournament-profile.action'

export type GameActions =
  | JoinToTournamentAction
  | InitTournamentProfileAction
  | LeaveFromTournamentAction
  | FetchTournamentInfoAction
  | ErrorFetchTournamentInfoAction
