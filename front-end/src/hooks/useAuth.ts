import { useAppSelector } from '../redux'

export const useAuth = () => {
  const {
    error,
    loading,
    data: { isAuth },
  } = useAppSelector((state) => state.auth)

  return {
    error,
    loading,
    isAuth,
  }
}
