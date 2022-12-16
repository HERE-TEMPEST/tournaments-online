import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN_PAGE_ROUTE } from '../constants'
import { useAuth } from '../hooks'

export const PrivateRoute = () => {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE_ROUTE} state={{ from: location }} />
  }

  return <Outlet />
}
