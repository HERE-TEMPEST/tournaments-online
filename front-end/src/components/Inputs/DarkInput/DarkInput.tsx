import classNames from 'classnames'
import React from 'react'

import scss from './DarkInput.module.scss'

interface DarkInputProps {
  type?: string
  placeholder?: string
  className?: string
  inputClassName?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DarkInput = ({
  onChange,
  type,
  className,
  placeholder,
  inputClassName,
  value,
}: DarkInputProps) => {
  return (
    <div className={classNames(className, scss.wrapper)}>
      <input
        className={inputClassName || ''}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
