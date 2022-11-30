import { useAppSelector } from '../redux'

export const useGlobalLoading = () => {
  const load1 = useAppSelector((state) => state.auth.loading)
  const load2 = useAppSelector((state) => state.tournaments.loading)
  const load3 = useAppSelector((state) => state.user.loading)

  return load1 || load2 || load3
}
