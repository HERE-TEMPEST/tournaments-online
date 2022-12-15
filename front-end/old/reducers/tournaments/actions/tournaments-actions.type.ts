import { ChangeRegionAction } from './region.actions'
import {
  ChangeFilterNameAction,
  CreateErrorInCreatingNewTournamentAction,
  CreateNewTournamentAction,
  ErrorInFetchingTournamentsAction,
  FilterTournamentsByNameAction,
  LoadingTournamentsAction,
  SetTournamentsAction,
  SuccessCreatingNewTournamentAction,
} from './tournaments.actions'

export type TournamentsActions =
  | ChangeRegionAction
  | SetTournamentsAction
  | LoadingTournamentsAction
  | ErrorInFetchingTournamentsAction
  | FilterTournamentsByNameAction
  | ChangeFilterNameAction
  | CreateNewTournamentAction
  | CreateErrorInCreatingNewTournamentAction
  | SuccessCreatingNewTournamentAction
