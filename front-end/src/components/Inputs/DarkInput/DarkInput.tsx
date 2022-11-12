import classNames from 'classnames'
import React from 'react'

import scss from './DarkInput.module.scss'

interface DarkInputProps {
  type?: string
  placeholder?: string
  className?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DarkInput = ({
  onChange,
  type,
  className,
  placeholder,
  value,
}: DarkInputProps) => {
  return (
    <div className={classNames(className, scss.wrapper)}>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
