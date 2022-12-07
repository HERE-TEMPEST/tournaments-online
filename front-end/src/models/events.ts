export type IEvents = ITournamentEvent

export interface ITournamentEvent {
  type: 'winner'
  id: string
  title: string
  profileUri: string
  message: string
}
