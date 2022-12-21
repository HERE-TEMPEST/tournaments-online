import { AuthUserSignOutAction } from '../../auth'
import { HomeChangeRegionAction } from './change-region.action'
import { HomeChangeTournamentsFiltersAction } from './change-tournaments-filters.action'
import { HomeNewMessageFromUserAction } from './message-from-user.action'
import { HomeLoadedTournamentsAction } from './tournaments-loaded.action'
import { HomeErrorInLoadingTournamentsAction } from './tournaments-loading-error.action'
import { HomeLoadingTournamentsAction } from './tournaments-loading.action'

export type HomeActionsTypes =
  | HomeLoadingTournamentsAction
  | HomeLoadedTournamentsAction
  | HomeErrorInLoadingTournamentsAction
  | HomeChangeRegionAction
  | HomeChangeTournamentsFiltersAction
  | HomeNewMessageFromUserAction
  | AuthUserSignOutAction
