import { IChatMessage, ITournament } from '../../../models'
import { Region } from '../../../types'

export interface HomeState {
  chat: {
    messages: Array<IChatMessage>
    loading: boolean
    error: string | undefined
  }
  filters: {
    searchLine: string
    filteredTournaments: Array<ITournament>
  }
  region: Region
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
  region: 'ca-central',
  tournaments: {
    data: [],
    loading: false,
    error: undefined,
  },
}
