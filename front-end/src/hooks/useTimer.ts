import { useEffect, useState } from 'react'

interface UseTimerState {
  startTimer: () => void
  stopTimer: () => void
  initTime: (initMilliseconds: number) => void
  timeInSeconds: number
}

export const useTimer = (initMilliseconds?: number): UseTimerState => {
  const [sign, setSegn] = useState(initMilliseconds ? -1 : 1)
  const [timeInSeconds, setTimeInSeconds] = useState(initMilliseconds || 0)
  const [_, refresh] = useState(true)

  const startTimer = () => {
    refresh(false)
  }

  const initTime = (initTime: number) => {
    setSegn(() => -1)
    setTimeInSeconds(() => initTime)
  }

  const stopTimer = () => {
    refresh(true)
  }

  useEffect(() => {
    if (!_) {
      const intervalId = setInterval(
        () => setTimeInSeconds((currentValue) => currentValue + sign),
        1000
      )

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [_])

  return {
    timeInSeconds,
    initTime,
    startTimer,
    stopTimer,
  }
}

export const toString = (time: number) => {
  // mm/ss
  const m = Math.trunc(time / 60)
  const s = Math.trunc(time % 60)
  return `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
}
