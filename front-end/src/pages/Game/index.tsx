import React, { useEffect } from 'react'
import { useGameLogic } from './hooks'

import scss from './Game.module.scss'
import { GameNavBar } from './NavBar'
import { GameArea } from './Area'
import { GameOver } from './GameOver'

export const GamePage = () => {
  const { game, time } = useGameLogic()

  useEffect(() => {
    time.startTimer()
  }, [])

  return (
    <div className={scss.wrapper}>
      {time.timeInSeconds > 0 ? (
        <div className={scss.content}>
          <GameNavBar score={game.score} time={time.timeInSeconds} />
          <GameArea
            addScore={game.addScore}
            addDowned={game.incrementDowned}
            addMissing={game.incrementMissed}
          />
        </div>
      ) : (
        <div className={scss.content}>
          <GameOver
            name={game.tournament}
            time={time.totalTime}
            downed={game.downed}
            missed={game.missed}
            score={game.score}
          />
        </div>
      )}
    </div>
  )
}
