import { IAuth } from '../../../models'

export interface AuthState {
  auth: IAuth | null
  loading: boolean
  error: string
}
