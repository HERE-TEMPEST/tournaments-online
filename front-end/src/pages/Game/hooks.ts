import { useState } from 'react'
import { useTimer } from '../../hooks'

export const useGameLogic = () => {
  const initial = 10
  const { startTimer, timeInSeconds } = useTimer(initial)
  const [score, changeScore] = useState(0)
  const [missed, setMissed] = useState(0)
  const [downed, setDowned] = useState(0)

  const addScore = (value: number) => {
    changeScore((curr) => curr + value)
  }

  const incrementMissed = () => {
    setMissed((prev) => prev + 1)
  }

  const incrementDowned = () => {
    setDowned((prev) => prev + 1)
  }

  return {
    time: {
      startTimer,
      timeInSeconds,
      totalTime: initial,
    },
    game: {
      tournament: 'Додики',
      incrementMissed,
      incrementDowned,
      downed,
      missed,
      score,
      addScore,
    },
  }
}
