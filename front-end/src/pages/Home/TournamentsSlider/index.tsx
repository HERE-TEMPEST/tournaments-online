import React from 'react'
import classNames from 'classnames'

import scss from './TournamentsSlider.module.scss'
import { Icon, Slider } from '../../../components'
import { TournamentItem } from '../../../components/TournamentItem'

interface TournamentsSliderProps {
  className: string
}

const tournaments = [
  {
    id: 1,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 2,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 3,
    title: 'Some asdasdasdasdasdasdasdadasdname',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 4,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 5,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
  {
    id: 6,
    title: 'Some name',
    currentAmount: 0,
    capacity: 10,
    postUri: location.origin + '/1.jpg',
  },
]

export const TournamentsSlider = ({ className }: TournamentsSliderProps) => {
  const handleClickChoiceTournament = (id: number) => {
    return id
  }

  return (
    <Slider oneByOne={true} className={classNames(scss.wrapper, className)}>
      <Slider.Button className={scss.sliderButton}>
        <Icon type="LeftArrow" />
      </Slider.Button>
      <Slider.Track windowClassName={scss.window}>
        {tournaments.map((tournament) => (
          <TournamentItem
            {...tournament}
            key={tournament.id}
            onClick={handleClickChoiceTournament}
          />
        ))}
      </Slider.Track>
      <Slider.Button className={scss.sliderButton} right={true}>
        <Icon type="RightArrow" />
      </Slider.Button>
    </Slider>
  )
}
