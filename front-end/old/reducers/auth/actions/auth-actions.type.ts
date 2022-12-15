import { LoginUserAction } from './login-user.action'
import { RegisterUserAction } from './register-user.action'
import { SignOutUserAction } from './sign-out.action'

export type AuthActions =
  | LoginUserAction
  | SignOutUserAction
  | RegisterUserAction
