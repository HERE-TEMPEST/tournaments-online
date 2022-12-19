export interface IChatMessage {
  type: 'message' | 'left' | 'join'
  userId: string
  id: string
  body: string
  username: string
  profileUri: string
}
