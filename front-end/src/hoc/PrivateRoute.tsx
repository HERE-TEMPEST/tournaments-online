import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN_PAGE_ROUTE } from '../constants'
import { IStore } from '../redux/store'

export const PrivateRoute = () => {
  const token = useSelector<IStore>((state) => state.user.token)
  const location = useLocation()

  if (!token) {
    return <Navigate to={LOGIN_PAGE_ROUTE} state={{ from: location }} />
  }

  return <Outlet />
}
