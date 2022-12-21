import { ITournament, IUser } from '../../../models'

export interface UserState {
  info: {
    data: IUser | undefined
    error: string | undefined
    loading: boolean
  }
  tournaments: {
    data: Array<ITournament>
    error: string | undefined
    loading: boolean
  }
}

export const initialUserState: UserState = {
  info: {
    data: undefined,
    error: undefined,
    loading: false,
  },
  tournaments: {
    data: [],
    error: undefined,
    loading: false,
  },
}
