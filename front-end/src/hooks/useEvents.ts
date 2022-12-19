import { useAppSelector } from '../redux'

export const useEvents = () => {
  const { error, events, loading } = useAppSelector((state) => state.events)

  return { events, error, loading }
}
