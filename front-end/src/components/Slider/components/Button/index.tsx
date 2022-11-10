import React from 'react'
import cn from 'classnames'

import scss from './Button.module.scss'
import { SliderContext } from '../../context.interface'

interface ButtonProps {
  children?: any
  left?: boolean
  right?: boolean
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, className, right } = props
  const { context } = props as {
    context: SliderContext
  }

  if (!context) {
    throw new Error('The button must be created inside <Slider> tag')
  }

  const handleClick = () => {
    const { move } = context

    move(right ? -1 : 1)
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={cn(scss.wrapper, className)} onClick={() => handleClick()}>
      {children}
    </div>
  )
}
