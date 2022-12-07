/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import { Icon } from '../../../components'
import { toString, useTimer } from '../../../hooks'
import { useAppSelector } from '../../../redux'

import scss from './NavBar.module.scss'

export const GameNavBar: React.FC = () => {
  const time = useTimer()
  const score = useAppSelector((state) => state.game.gameState.score)
  const initialTime = useAppSelector(
    (state) => state.game.tournament?.duration || 0
  )

  useEffect(() => {
    time.initTime(initialTime)
    time.startTimer()
  }, [])

  return (
    <div className={scss.wrapper}>
      <div className={scss.timer}>Time: {toString(time.timeInSeconds)}</div>
      <div className={scss.score}>Score: {score}</div>
      <div className={scss.icon}>
        <Icon type="Exit" />
      </div>
    </div>
  )
}
