import { ITournament } from '../../../../models'
import { TournamentsActionsTypes } from '../types'

export interface SetTournamentsAction {
  type: `${TournamentsActionsTypes.SET_TOURNAMENTS_ACTION}`
  payload: Array<ITournament>
}

export const createSetTournamentsAction = (
  payload: Array<ITournament>
): SetTournamentsAction => {
  return {
    type: `${TournamentsActionsTypes.SET_TOURNAMENTS_ACTION}`,
    payload: payload,
  }
}

export interface ErrorInFetchingTournamentsAction {
  type: `${TournamentsActionsTypes.ERROR_IN_FETCHING_TOURNAMENTS}`
  payload: string
}

export const createErrorInFetchingTournamentsAction = (
  payload: string
): ErrorInFetchingTournamentsAction => {
  return {
    type: `${TournamentsActionsTypes.ERROR_IN_FETCHING_TOURNAMENTS}`,
    payload: payload,
  }
}

export interface LoadingTournamentsAction {
  type: `${TournamentsActionsTypes.LOADING_TOURNAMENTS_ACTION}`
  payload: undefined
}

export const createLoadingTournamentsAction = (): LoadingTournamentsAction => {
  return {
    type: `${TournamentsActionsTypes.LOADING_TOURNAMENTS_ACTION}`,
    payload: undefined,
  }
}

export interface FilterTournamentsByNameAction {
  type: `${TournamentsActionsTypes.FILTER_TOURNAMENTS_BY_NAME_ACTION}`
  payload: undefined
}

export const createFilterTournamentsByNameAction =
  (): FilterTournamentsByNameAction => {
    return {
      type: `${TournamentsActionsTypes.FILTER_TOURNAMENTS_BY_NAME_ACTION}`,
      payload: undefined,
    }
  }

export interface ChangeFilterNameAction {
  type: `${TournamentsActionsTypes.CHANGE_FILTER_NAME_ACTION}`
  payload: string
}

export const createChangeFilterName = (
  payload: string
): ChangeFilterNameAction => {
  return {
    type: `${TournamentsActionsTypes.CHANGE_FILTER_NAME_ACTION}`,
    payload,
  }
}

export interface CreateNewTournamentAction {
  type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_ACTION}`
  payload: undefined
}

export const createCreateNewTournamentAction = (
  payload: undefined
): CreateNewTournamentAction => {
  return {
    type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_ACTION}`,
    payload,
  }
}

export interface CreateErrorInCreatingNewTournamentAction {
  type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_ERROR_ACTION}`
  payload: string
}

export const createErrorInCreatingNewTournamentAction = (
  payload: string
): CreateErrorInCreatingNewTournamentAction => {
  return {
    type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_ERROR_ACTION}`,
    payload,
  }
}

export interface SuccessCreatingNewTournamentAction {
  type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_SUCCESS_ACTION}`
  payload: undefined
}

export const createSuccessCreatingNewTournamentAction = (
  payload: undefined
): SuccessCreatingNewTournamentAction => {
  return {
    type: `${TournamentsActionsTypes.CREATE_NEW_TOURNAMENT_SUCCESS_ACTION}`,
    payload,
  }
}
