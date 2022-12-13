import { useEffect, useState } from 'react'
import { Loader, Portal } from '../../../components'
import { TournamentItem } from '../../../components/TournamentItem'
import { ITournament } from '../../../models'
import {
  fetchUserTournaments,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'
import { SelectedTournament } from './SelectedTournament'
import scss from './Tournaments.module.scss'

export const WinninedTournaments = () => {
  const dispatch = useAppDispatch()
  const tournaments = useAppSelector((state) => state.user.tournaments)
  const isFetching = useAppSelector((state) => state.user.loadingTournaments)

  const [selectedTournament, setSelectedTournament] = useState<
    ITournament | undefined
  >(undefined)

  const onClick = (id: number) => {
    setSelectedTournament(tournaments!.find((tour) => tour.id === id))
  }

  const onClose = () => {
    setSelectedTournament(undefined)
  }

  useEffect(() => {
    dispatch(fetchUserTournaments())
  }, [])

  if (isFetching) {
    return (
      <div className={scss.wrapper}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={scss.wrapper}>
      {!isFetching ? (
        <div className={scss.content}>
          {tournaments?.map((tournament) => (
            <TournamentItem
              tournament={tournament}
              key={tournament.id}
              onClick={onClick}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {selectedTournament ? (
        <Portal>
          <SelectedTournament
            tournament={selectedTournament}
            onClick={onClose}
          />
        </Portal>
      ) : null}
    </div>
  )
}
