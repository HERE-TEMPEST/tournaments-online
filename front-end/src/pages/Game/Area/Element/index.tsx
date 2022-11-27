/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import { vh, vw } from '../../../../styles'
import { randomIntRange } from '../../../../utils'

import scss from './Element.module.scss'

interface GameElementProps {
  areaWidth: number
  areaHeight: number
  onClick: (value: number, key: React.Key) => void
  onSuicide: (key: React.Key) => void
  id: React.Key
}

export const GameElement: React.FC<GameElementProps> = ({
  areaWidth,
  areaHeight,
  id,
  onClick,
  onSuicide,
}: GameElementProps) => {
  const price = randomIntRange(100, 400)
  const radius = 400 - price + 100

  const x = randomIntRange(radius, areaWidth - radius)
  const y = randomIntRange(radius, areaHeight - radius)
  let color = 'red'

  if (radius >= 200 && radius < 300) {
    color = 'blue'
  } else if (radius >= 300) {
    color = 'green'
  }

  useEffect(() => {
    const ttl = Math.round((400 / radius) * 1000)
    const timeoutId = setTimeout(() => onSuicide(id), ttl)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      className={scss.wrapper}
      style={{
        borderRadius: vw(radius),
        width: vw(radius),
        height: vw(radius),
        left: vw(x),
        top: vh(y),
        fontSize: vw(24),
        background: color,
      }}
      onClick={() => onClick(price, id)}
    >
      {price}
    </div>
  )
}
