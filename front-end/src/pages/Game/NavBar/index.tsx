/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Icon } from '../../../components'
import { toString } from '../../../hooks'

import scss from './NavBar.module.scss'

interface GameNavBarProps {
  score: number
  time: number
}

export const GameNavBar: React.FC<GameNavBarProps> = ({
  score,
  time,
}: GameNavBarProps) => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.timer}>Time: {toString(time)}</div>
      <div className={scss.score}>Score: {score}</div>
      <div className={scss.icon}>
        <Icon type="Exit" />
      </div>
    </div>
  )
}
