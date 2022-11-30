const ROOT = ''
export const LOGIN_PAGE_ROUTE = `${ROOT}/login`
export const HOME_PAGE_ROUTE = `${ROOT}/`
export const PROFILE_PAGE_ROUTE = `${ROOT}/profile`
export const CREATE_TOURNAMENT_PAGE_ROUTE = `${ROOT}/create-tournament`
export const TOURNAMENT_WAITING_PAGE_ROUTE = `${ROOT}/tournaments/:id/waiting`
export const REGISTRATION_PAGE_ROUTE = `${ROOT}/registration`
export const TABLE_RECORDS_PAGE_ROUTE = `${ROOT}/table-records`
export const TOURNAMENT_PAGE_ROUTE = `${ROOT}/tournaments/:id/game`

export const createTournamentWaitingPageUri = (id: string | number) => {
  return `${ROOT}/tournaments/${id}/waiting`
}

export const createTournamentPageUri = (id: string | number) => {
  return `${ROOT}/tournaments/${id}/game`
}
