import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN_PAGE_ROUTE } from '../constants'
import { fetchUserInfo, useAppDispatch, useAppSelector } from '../redux'

export const PrivateRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.auth?.isAuth || false)
  const token = useAppSelector((state) => state.auth.auth?.token)

  useEffect(() => {
    dispath(fetchUserInfo({ token: token! }))
  }, [isAuth])

  const location = useLocation()

  const isLoading = useAppSelector((state) => state.user.loading)
  const error = useAppSelector((state) => state.user.error)

  const dispath = useAppDispatch()

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE_ROUTE} state={{ from: location }} />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (isLoading) {
    return <div> Идет загрузка... </div>
  } else {
    return <Outlet />
  }
}
