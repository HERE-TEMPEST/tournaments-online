import { SignOutUserAction } from '../../auth/actions/sign-out.action'
import { AddMissedElementToTournamentGameAction } from './add-missed-element.action'
import { AddScoreToTournamentGameAction } from './add-score.action'
import { ErrorFetchTournamentInfoAction } from './error-fetch-tournament-info.action'
import { FetchTournamentInfoAction } from './fetch-tournament-info.action'
import { JoinToTournamentAction } from './join-to-tournament.action'
import { JoinedToTournamentAction } from './joined-to-chat'
import { LeaveFromTournamentAction } from './leave-from-tournament.action'
import { NotJoinedToTournamentAction } from './not-joined-to-chat'
import { OnMessageToTournamentAction } from './on-message-to-tournament.action'
import { SendMessageToTournamentAction } from './send-message.action'
import { SendTournamentResultAction } from './send-result.action'
import {
  FinishTournamentAction,
  StartTournamentAction,
} from './start-finish-game.actions'
import { InitTournamentProfileAction } from './tournament-profile.action'
import {
  UserJoinToTournamentAction,
  UserLeaveFromTournamentAction,
} from './user-join-leave.action'

export type GameActions =
  | JoinToTournamentAction
  | InitTournamentProfileAction
  | LeaveFromTournamentAction
  | FetchTournamentInfoAction
  | ErrorFetchTournamentInfoAction
  | JoinedToTournamentAction
  | NotJoinedToTournamentAction
  | OnMessageToTournamentAction
  | SendMessageToTournamentAction
  | UserLeaveFromTournamentAction
  | UserJoinToTournamentAction
  | StartTournamentAction
  | FinishTournamentAction
  | AddScoreToTournamentGameAction
  | AddMissedElementToTournamentGameAction
  | SendTournamentResultAction
  | SignOutUserAction
