export interface AuthState {
  data: {
    token: string | undefined
    isAuth: boolean
  }
  error: string | undefined
  loading: boolean
}

export const initialAuthState: AuthState = {
  data: {
    token: undefined,
    isAuth: false,
  },
  error: undefined,
  loading: false,
}
