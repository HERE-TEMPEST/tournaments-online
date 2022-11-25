import React from 'react'
import cn from 'classnames'

import { Button, Track } from './components'

import scss from './Slider.module.scss'
import cloneChildren from './cloneChildrens'

interface SliderProps {
  children: any
  className?: string
  oneByOne?: boolean
  shift?: number
}

export const Slider = ({
  shift,
  children,
  className,
  oneByOne,
}: SliderProps) => {
  const context: any = {
    move: () => {
      return
    },
    oneByOne,
    shift,
  }

  return (
    <div className={cn(scss.wrapper, className)}>
      {cloneChildren(
        children,
        () => {
          return {
            context,
          }
        },
        [Button.name, Track.name]
      )}
    </div>
  )
}

Slider.Button = Button
Slider.Track = Track
