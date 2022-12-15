import { IAuth } from '../../../models'

export interface AuthState {
  auth: IAuth
  loading: boolean
  error: string
}
