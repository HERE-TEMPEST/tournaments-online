import { ChangeRegionAction } from './region.actions'
import {
  ChangeFilterNameAction,
  ErrorInFetchingTournamentsAction,
  FilterTournamentsByNameAction,
  LoadingTournamentsAction,
  SetTournamentsAction,
} from './tournaments.actions'

export type TournamentsActions =
  | ChangeRegionAction
  | SetTournamentsAction
  | LoadingTournamentsAction
  | ErrorInFetchingTournamentsAction
  | FilterTournamentsByNameAction
  | ChangeFilterNameAction
