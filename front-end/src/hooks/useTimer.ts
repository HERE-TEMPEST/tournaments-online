import { useEffect, useState } from 'react'

interface UseTimerState {
  startTimer: () => void
  stopTimer: () => void
  toString: (time: number) => string
  timeInSeconds: number
}

export const useTimer = (): UseTimerState => {
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  const [_, refresh] = useState(true)

  const startTimer = () => {
    refresh(false)
  }

  const stopTimer = () => {
    refresh(true)
  }

  useEffect(() => {
    console.log('some', _)
    if (!_) {
      const intervalId = setInterval(
        () => setTimeInSeconds((currentValue) => currentValue + 1),
        1000
      )

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [_])

  const toString = (time: number) => {
    // mm/ss
    const m = Math.trunc(time / 60)
    const s = Math.trunc(time % 60)
    return `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
  }

  return {
    timeInSeconds,
    startTimer,
    toString,
    stopTimer,
  }
}
