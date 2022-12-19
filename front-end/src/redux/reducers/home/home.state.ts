import { IChatMessage, ITournament } from '../../../models'

export interface HomeState {
  chat: {
    messages: Array<IChatMessage>
    loading: boolean
    error: string | undefined
  }
  filters: {
    searchLine: ''
    filteredTournaments: []
  }
  tournaments: {
    data: Array<ITournament>
    loading: boolean
    error: string | undefined
  }
}

export const initialHomeState: HomeState = {
  chat: {
    messages: [],
    loading: false,
    error: undefined,
  },
  filters: {
    searchLine: '',
    filteredTournaments: [],
  },
  tournaments: {
    data: [],
    loading: false,
    error: undefined,
  },
}
