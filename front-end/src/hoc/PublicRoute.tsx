import { Navigate, Outlet } from 'react-router-dom'
import { Portal, TournamentsEvents } from '../components'
import { HOME_PAGE_ROUTE } from '../constants'
import { useAppSelector } from '../redux'

export const PublicRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.auth?.isAuth || false)

  if (isAuth) {
    return <Navigate to={HOME_PAGE_ROUTE} replace={true} />
  }

  return <Outlet />
}
