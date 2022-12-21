import { Region } from '../types'
import { IProfile } from './user.model'

export interface ITournamentMember {
  id: number
  memberId: string
  score: number
  tournament: ITournament
}

export interface ITournament {
  id: number
  name: string
  currentAmount: number
  description: string
  capacity: number
  region: Region
  duration: number
  profile: IProfile
  members: Array<ITournamentMember>
  isStarted: boolean
}

export interface ITournamentsFilters {
  searchLine?: string
}
