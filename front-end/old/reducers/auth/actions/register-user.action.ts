export const REGISTER_USER_ACTION = 'REGISTER_USER_ACTION'

interface RegisterUserActionPayload {
  token: string
}
export interface RegisterUserAction {
  type: 'REGISTER_USER_ACTION'
  payload: RegisterUserActionPayload
}

export const createRegisterUserAction = (
  payload: RegisterUserActionPayload
): RegisterUserAction => {
  return {
    type: REGISTER_USER_ACTION,
    payload,
  }
}
