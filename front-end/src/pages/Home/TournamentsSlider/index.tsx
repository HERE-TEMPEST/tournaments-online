import React, { useEffect } from 'react'
import classNames from 'classnames'

import scss from './TournamentsSlider.module.scss'
import { Icon, Loader, Slider } from '../../../components'
import { TournamentItem } from '../../../components/TournamentItem'
import {
  fetchAllTournamentsByRegion,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'
import { ITournament } from '../../../models'

interface TournamentsSliderProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedTournament: React.Dispatch<
    React.SetStateAction<ITournament | undefined>
  >
}

export const TournamentsSlider = ({
  isOpen,
  setSelectedTournament,
}: TournamentsSliderProps) => {
  const region = useAppSelector((state) => state.tournaments.region)
  const tournaments = useAppSelector(
    (state) => state.tournaments.filteredTournaments
  )
  const isLoading = useAppSelector((state) => state.tournaments.loading)
  const dispath = useAppDispatch()

  useEffect(() => {
    dispath(fetchAllTournamentsByRegion())
  }, [region])

  const handleClickChoiceTournament = (id: number) => {
    isOpen(true)
    setSelectedTournament(tournaments.find((tour) => tour.id === id))
  }

  if (isLoading) {
    return (
      <div className={scss.wrapper}>
        <Loader />
      </div>
    )
  }

  return (
    <Slider oneByOne={true} className={classNames(scss.wrapper)}>
      <Slider.Button className={scss.sliderButton}>
        <Icon type="LeftArrow" />
      </Slider.Button>
      <Slider.Track windowClassName={scss.window}>
        {tournaments.map((tournament) => (
          <TournamentItem
            className={scss.item}
            tournament={tournament}
            key={tournament.id}
            onClick={handleClickChoiceTournament}
          />
        ))}
      </Slider.Track>
      <Slider.Button className={scss.sliderButton} right>
        <Icon type="RightArrow" />
      </Slider.Button>
    </Slider>
  )
}
