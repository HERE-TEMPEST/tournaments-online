import React from 'react'
import classNames from 'classnames'

import scss from './TournamentsSlider.module.scss'
import { Icon, Slider } from '../../../components'

interface TournamentsSliderProps {
  className: string
}

const tournaments = [
  { id: 1, title: 'Some name', currentAmount: 0, capacity: 10 },
  { id: 2, title: 'Some name', currentAmount: 0, capacity: 10 },
]

export const TournamentsSlider = ({ className }: TournamentsSliderProps) => {
  return (
    <Slider oneByOne={true} className={classNames(scss.wrapper, className)}>
      <Slider.Button className={scss.sliderButton}>
        <Icon type="LeftArrow" />
      </Slider.Button>
      <Slider.Track windowClassName={scss.window}>
        {tournaments.map((tournament) => (
          <div key={tournament.id}>
            <div>{tournament.title}</div>
            <div>
              {tournament.currentAmount}/{tournament.capacity}
            </div>
          </div>
        ))}
      </Slider.Track>
      <Slider.Button className={scss.sliderButton} right={true}>
        <Icon type="RightArrow" />
      </Slider.Button>
    </Slider>
  )
}
