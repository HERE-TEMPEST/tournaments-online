import classNames from 'classnames'
import React from 'react'

import scss from './TransparentButton.module.scss'

interface TransparentButtonProps {
  title: string
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const TransparentButton = ({
  title,
  className,
  onClick,
}: TransparentButtonProps) => {
  return (
    <button className={classNames(className, scss.wrapper)} onClick={onClick}>
      {title}
    </button>
  )
}
