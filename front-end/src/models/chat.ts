export interface IChatMessage {
  type: 'message' | 'left' | 'join'
  userId: string
  id: number
  body: string
  username: string
  profileUri: string
}
