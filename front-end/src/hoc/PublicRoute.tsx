import { Navigate, Outlet } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '../constants'
import { useAuth } from '../hooks'

export const PublicRoute = () => {
  const { isAuth } = useAuth()

  if (isAuth) {
    return <Navigate to={HOME_PAGE_ROUTE} replace={true} />
  }

  return <Outlet />
}
