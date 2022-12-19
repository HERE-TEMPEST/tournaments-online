import { useAppSelector } from '../redux'

export const useAuth = () => {
  const {
    error,
    loading,
    data: { isAuth, token },
  } = useAppSelector((state) => state.auth)

  return {
    error,
    loading,
    isAuth,
    token,
  }
}
