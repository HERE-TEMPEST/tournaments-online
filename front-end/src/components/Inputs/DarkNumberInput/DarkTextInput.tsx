import classNames from 'classnames'
import React from 'react'

import scss from './DarkNumberInput.module.scss'

interface DarkNumberInputProps {
  placeholder?: string
  className?: string
  inputClassName?: string
  value: string | number
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DarkNumberInput: React.FC<DarkNumberInputProps> = ({
  onChange,
  className,
  placeholder,
  inputClassName,
  value,
  name,
}: DarkNumberInputProps) => {
  return (
    <div className={classNames(className, scss.wrapper)}>
      <input
        className={inputClassName}
        onChange={onChange}
        type={'number'}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
