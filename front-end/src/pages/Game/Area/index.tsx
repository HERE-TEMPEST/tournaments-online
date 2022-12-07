import React, { useEffect, useRef, useState } from 'react'
import { v4 } from 'uuid'
import {
  createAddMissedElementToTournamentGameAction,
  createAddScoreToTournamentGameAction,
  useAppDispatch,
} from '../../../redux'

import { randomIntRange } from '../../../utils'
import scss from './Area.module.scss'
import { GameElement } from './Element'

export const GameArea: React.FC = () => {
  const area = useRef<any>()
  const dispatch = useAppDispatch()

  const [items, setItems] = useState<Array<JSX.Element>>([])
  const [flag, setFlag] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const areaHeight = area.current.clientHeight
      const areaWidth = area.current.clientWidth

      const onClick = (value: number, key: React.Key) => {
        dispatch(createAddScoreToTournamentGameAction({ score: value }))
        setItems((currentValue) => [
          ...currentValue.filter((value) => value.key !== key),
        ])

        setFlag((prev) => prev + 1)
      }

      const onSuicide = (key: React.Key) => {
        dispatch(createAddMissedElementToTournamentGameAction(undefined))
        setItems((currentValue) => [
          ...currentValue.filter((value) => value.key !== key),
        ])

        setFlag((prev) => prev + 1)
      }

      const id = v4()

      const element = (
        <GameElement
          areaHeight={areaHeight}
          areaWidth={areaWidth}
          onClick={onClick}
          onSuicide={onSuicide}
          id={id}
          key={id}
        />
      )

      setItems((curr) => [...curr, element])
    }, randomIntRange(500, 1500))

    return () => {
      clearTimeout(timeoutId)
    }
  }, [flag])

  return (
    <div className={scss.wrapper} ref={area}>
      {items}
    </div>
  )
}
