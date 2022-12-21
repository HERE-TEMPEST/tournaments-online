import { useCallback } from 'react'
import { ITournamentsFilters } from '../models'
import {
  createAsyncHomeLoadTournamentsAction,
  createHomeChangeTournamentsFiltersAction,
  createHomeNewMessageFromUserAction,
  useAppDispatch,
  useAppSelector,
} from '../redux'

export const useHome = () => {
  const dispatch = useAppDispatch()

  const { chat, filters, region, tournaments } = useAppSelector(
    (state) => state.home
  )

  const fetchTournaments = useCallback(() => {
    dispatch(createAsyncHomeLoadTournamentsAction())
  }, [])

  const addNewMessage = useCallback(
    ({
      userId,
      body,
      profileUri,
      username,
      type,
    }: {
      userId: string
      body: string
      profileUri: string
      username: string
      type: 'message' | 'left' | 'join'
    }) => {
      dispatch(
        createHomeNewMessageFromUserAction({
          body,
          profileUri,
          userId,
          username,
          type,
        })
      )
    },
    []
  )

  const setFilters = useCallback((filters: ITournamentsFilters) => {
    dispatch(createHomeChangeTournamentsFiltersAction({ filters }))
  }, [])

  return {
    chatMessages: chat.messages,
    isLoadingChat: chat.loading,
    tournaments: filters.filteredTournaments,
    filters: {
      searchLine: filters.searchLine,
    },
    region,
    isLoadingTournaments: tournaments.loading,
    fetchTournaments,
    setFilters,
    addNewMessage,
  }
}
