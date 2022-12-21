import React, { useEffect } from 'react'
import classNames from 'classnames'

import scss from './TournamentsSlider.module.scss'
import { Icon, Loader, Slider } from '../../../components'
import { TournamentItem } from '../../../components/TournamentItem'
import { ITournament } from '../../../models'
import { useHome } from '../../../hooks'

interface TournamentsSliderProps {
  setSelectedTournament: React.Dispatch<
    React.SetStateAction<ITournament | undefined>
  >
}

export const TournamentsSlider = ({
  setSelectedTournament,
}: TournamentsSliderProps) => {
  const { tournaments, isLoadingTournaments, region, fetchTournaments } =
    useHome()

  useEffect(() => {
    fetchTournaments()
  }, [region])

  const handleClickChoiceTournament = (id: number) => {
    setSelectedTournament(tournaments.find((tour) => tour.id === id))
  }

  if (isLoadingTournaments) {
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
