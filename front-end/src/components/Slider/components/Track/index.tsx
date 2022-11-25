import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import css from './Track.module.scss'
import { SliderContext } from '../../context.interface'

interface TrackProps {
  children?: any
  windowClassName?: string
  pipelineClassName?: string
  direction?: 'column' | 'row'
}

export const Track = (props: TrackProps) => {
  const { children, windowClassName, pipelineClassName, direction } = props
  const { context } = props as unknown as {
    context: SliderContext
  }

  if (!context) {
    throw new Error('The track must be created inside <Slider> tag')
  }

  const pipeline = useRef<any>()
  const windowClass = useRef<any>()
  const [shift, setShift] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [move, setMove] = useState(context.shift || 0)

  context.move = (value: number) => {
    const amountMove = shift + value * move

    if (value < 0) {
      const width =
        pipeline.current?.clientWidth - windowClass.current?.clientWidth

      setShift(Math.max(amountMove, -width))
    } else {
      setShift(Math.min(amountMove, 0))
    }
  }

  useEffect(() => {
    const { oneByOne } = context
    if (oneByOne || !context.shift) {
      const newMove = Math.round(windowWidth / React.Children.count(children))
      setMove(newMove)
      setShift(0)
    }
  }, [windowWidth])

  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowWidth(pipeline.current?.clientWidth)
    }
    window.addEventListener('resize', handleResizeWindow)

    setWindowWidth(pipeline.current?.clientWidth)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  return (
    <div className={classNames(css.wrapper)}>
      <div
        className={classNames(css.window, windowClassName)}
        ref={windowClass}
      >
        <div
          className={classNames(css.pipeline, pipelineClassName)}
          style={{
            flexDirection: direction || 'row',
            transform: `translateX(${shift}px)`,
          }}
          ref={pipeline}
        >
          {React.Children.map(children, (element: any) => {
            return element
          })}
        </div>
      </div>
    </div>
  )
}
