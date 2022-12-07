import React, { useEffect } from 'react'

import scss from './Game.module.scss'
import { GameNavBar } from './NavBar'
import { GameArea } from './Area'
import { GameOver } from './GameOver'
import {
  createLeaveFromTournamentAction,
  createSendTournamentResultAction,
  useAppDispatch,
  useAppSelector,
} from '../../redux'

export const GamePage = () => {
  const dispatch = useAppDispatch()
  const gameIsOver = useAppSelector(
    (state) => state.game.gameState.gameIsFinished
  )

  useEffect(() => {
    return () => {
      dispatch(createSendTournamentResultAction(undefined))
      dispatch(createLeaveFromTournamentAction(undefined))
    }
  }, [])

  return (
    <div className={scss.wrapper}>
      {!gameIsOver ? (
        <div className={scss.content}>
          <GameNavBar />
          <GameArea />
        </div>
      ) : (
        <div className={scss.content}>
          <GameOver />
        </div>
      )}
    </div>
  )
}
