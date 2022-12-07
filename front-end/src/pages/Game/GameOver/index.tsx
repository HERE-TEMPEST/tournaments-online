import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TransparentButton } from '../../../components/Buttons'
import { HOME_PAGE_ROUTE } from '../../../constants'
import { toString } from '../../../hooks'
import { useAppSelector } from '../../../redux'

import scss from './GameOver.module.scss'

export const GameOver: React.FC = () => {
  const tournament = useAppSelector((state) => state.game.tournament)
  const gameState = useAppSelector((state) => state.game.gameState)

  const navigation = useNavigate()

  const onExit = () => {
    navigation(HOME_PAGE_ROUTE, { replace: true })
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.title}>Time is over</div>
      <div className={scss.info}>
        <div className={scss.name}>{tournament?.name || 'Tournament Name'}</div>
      </div>
      <div className={scss.gameInfo}>
        <div className={scss.text}>
          Total time: {toString(tournament?.duration || 0)}
        </div>
        <div className={scss.text}>Missed: {gameState.missed}</div>
        <div className={scss.text}>Downed: {gameState.downed}</div>
        <div className={scss.text}>Score: {gameState.score}</div>
      </div>

      <TransparentButton
        title="Exit"
        onClick={onExit}
        className={scss.exitBtn}
      />
    </div>
  )
}
