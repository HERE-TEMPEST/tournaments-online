export interface IProfile {
  key: string
  uri: string
}

export interface IUser {
  _id: string
  name: string
  login: string
  password: string
  surname: string
  email: string
  profile: IProfile | null
}

export interface IAuth {
  isAuth: boolean
  token: string
}
