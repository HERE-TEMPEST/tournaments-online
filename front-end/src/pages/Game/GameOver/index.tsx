import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TransparentButton } from '../../../components/Buttons'
import { HOME_PAGE_ROUTE } from '../../../constants'
import { toString } from '../../../hooks'

import scss from './GameOver.module.scss'

interface GameOverProps {
  score: number
  time: number
  downed: number
  missed: number
  name: string
}

export const GameOver: React.FC<GameOverProps> = ({
  downed,
  missed,
  name,
  score,
  time,
}: GameOverProps) => {
  const navigation = useNavigate()

  const onExit = () => {
    navigation(HOME_PAGE_ROUTE, { replace: true })
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.title}>Time is over</div>
      <div className={scss.info}>
        <div className={scss.name}>{name}</div>
      </div>
      <div className={scss.gameInfo}>
        <div className={scss.text}>Total time: {toString(time)}</div>
        <div className={scss.text}>Missed: {missed}</div>
        <div className={scss.text}>Downed: {downed}</div>
        <div className={scss.text}>Score: {score}</div>
      </div>

      <TransparentButton
        title="Exit"
        onClick={onExit}
        className={scss.exitBtn}
      />
    </div>
  )
}
