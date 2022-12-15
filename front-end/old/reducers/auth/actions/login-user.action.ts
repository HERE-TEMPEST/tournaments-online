export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION'

interface LoginUserActionPayload {
  token: string
}
export interface LoginUserAction {
  type: 'LOGIN_USER_ACTION'
  payload: LoginUserActionPayload
}

export const createLoginUserAction = (
  payload: LoginUserActionPayload
): LoginUserAction => {
  return {
    type: LOGIN_USER_ACTION,
    payload,
  }
}
