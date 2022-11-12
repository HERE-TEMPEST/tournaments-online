import { IProfile } from './profile.model'

export interface IUser {
  name: string
  surname: string
  token: string
  profileUri: IProfile | null
}
