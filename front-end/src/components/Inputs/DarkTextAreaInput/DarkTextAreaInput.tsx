import classNames from 'classnames'
import React from 'react'

import scss from './DarkTextAreaInput.module.scss'

interface DarkTextAreaInputProps {
  placeholder?: string
  className?: string
  inputClassName?: string
  value: string | number
  cols?: number
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const DarkTextAreaInput: React.FC<DarkTextAreaInputProps> = ({
  onChange,
  className,
  placeholder,
  inputClassName,
  value,
  name,
  cols,
}: DarkTextAreaInputProps) => {
  return (
    <div className={classNames(className, scss.wrapper)}>
      <textarea
        className={inputClassName}
        onChange={onChange}
        name={name}
        cols={cols || 1}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
