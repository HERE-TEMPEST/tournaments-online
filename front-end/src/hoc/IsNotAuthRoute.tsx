import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '../constants'
import { IStore } from '../redux/store'

export const IsNotAuthRoute = () => {
  const token = useSelector<IStore>((state) => state.user.token)

  if (token) {
    return <Navigate to={HOME_PAGE_ROUTE} replace={true} />
  }

  return <Outlet />
}
