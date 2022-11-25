export interface IProfile {
  key: string
  uri: string
}

export interface IUser {
  name: string
  surname: string
  token: string
  profileUri: IProfile | null
}
