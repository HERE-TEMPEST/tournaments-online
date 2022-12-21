import { useCallback } from 'react'

import {
  createAsyncUserLoadUserInfoAction,
  useAppDispatch,
  useAppSelector,
} from '../redux'

export const useUser = () => {
  const dispatch = useAppDispatch()

  const { tournaments, info } = useAppSelector((state) => state.user)

  const fetchUser = useCallback(() => {
    dispatch(createAsyncUserLoadUserInfoAction())
  }, [])

  return {
    errorInFetchingUserInfo: info.error,
    userIsLoading: info.loading,
    user: info.data,
    errorInFetchingUserTournaments: tournaments.error,
    userTournamentsAreLoading: tournaments.loading,
    tournaments: tournaments.data,
    fetchUser,
  }
}
