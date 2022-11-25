/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { Icon } from '../../../components'
import { useTimer } from '../../../hooks'

import scss from './NavBar.module.scss'

export const GameNavBar = () => {
  const { startTimer, timeInSeconds, toString } = useTimer()
  const [score, setScore] = useState(0)

  useEffect(() => {
    startTimer()
  }, [])

  const onClick = () => {
    setScore((c) => c + 100)
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.timer}>Time: {toString(timeInSeconds)}</div>
      <div className={scss.score}>Score: {score}</div>
      <div className={scss.icon} onClick={() => onClick()}>
        <Icon type="Exit" />
      </div>
    </div>
  )
}
