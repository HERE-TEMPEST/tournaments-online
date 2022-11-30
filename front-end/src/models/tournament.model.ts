import { Region } from '../types'

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
  capacity: number
  region: Region
  duration: number
  members: Array<ITournamentMember>
  isStarted: boolean
}
