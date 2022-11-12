import { IUser } from '../../../models'
import { LOGIN_USER_ACTION, UserActions } from './actions'

const initialValue: IUser = {
  name: '',
  surname: '',
  token: 'ss',
  profileUri: null,
}

export const userReducer = (
  state: IUser = initialValue,
  action: UserActions
) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_USER_ACTION: {
      const { token } = payload
      return { ...state, token }
    }

    default:
      return state
  }
}
