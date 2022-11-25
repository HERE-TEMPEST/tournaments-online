/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import React, { useRef } from 'react'

import scss from './DarkFileInput.module.scss'

interface DarkFileInputProps {
  className?: string
  inputClassName?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DarkFileInput = ({
  onChange,
  className,
  inputClassName,
  value,
}: DarkFileInputProps) => {
  const inputRef = useRef<any>(null)

  const handleCliclSelectFile = () => {
    inputRef.current.click()
  }

  return (
    <div className={classNames(className, scss.wrapper)}>
      <div className={scss.text} onClick={() => handleCliclSelectFile()}>
        выберете файл...
      </div>
      <input
        ref={inputRef}
        className={inputClassName || ''}
        onChange={onChange}
        type="file"
        value={value}
      />
    </div>
  )
}
