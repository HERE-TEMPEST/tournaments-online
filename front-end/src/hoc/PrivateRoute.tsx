import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN_PAGE_ROUTE } from '../constants'
import { useAppSelector } from '../redux'

export const PrivateRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.auth?.isAuth || false)
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE_ROUTE} state={{ from: location }} />
  }

  return <Outlet />
}
