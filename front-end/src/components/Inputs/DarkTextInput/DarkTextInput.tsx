import classNames from 'classnames'
import React from 'react'

import scss from './DarkTextInput.module.scss'

interface DarkTextInputProps {
  placeholder?: string
  className?: string
  inputClassName?: string
  value: string
  isPassword?: boolean
  name?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DarkTextInput = ({
  onChange,
  className,
  placeholder,
  isPassword,
  inputClassName,
  value,
  name,
  disabled,
}: DarkTextInputProps) => {
  return (
    <div className={classNames(className, scss.wrapper)}>
      <input
        disabled={disabled}
        className={inputClassName}
        onChange={onChange}
        type={isPassword ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  )
}
