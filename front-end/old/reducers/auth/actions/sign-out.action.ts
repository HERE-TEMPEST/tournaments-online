export const SIGNOUT_USER_ACTION = 'SIGNOUT_USER_ACTION'

export interface SignOutUserAction {
  type: 'SIGNOUT_USER_ACTION'
  payload: undefined
}

export const createSignOutUserAction = (): SignOutUserAction => {
  return {
    type: SIGNOUT_USER_ACTION,
    payload: undefined,
  }
}
