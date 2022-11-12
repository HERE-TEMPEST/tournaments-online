import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkInput } from '../../components'
import { TransparentButton } from '../../components/Buttons'
import { REGISTRATION_PAGE_ROUTE } from '../../constants'

import scss from './Registration.module.scss'

export const RegistrationPage = () => {
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')

  const onChangePassword = (e: any) => {
    setPassword(() => e.target.value)
  }
  const onChangeRegistration = (e: any) => {
    setRegistration(() => e.target.value)
  }

  const handleClickRegistration = () => {
    return
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <DarkInput
          className={scss.Registration}
          placeholder="Логин..."
          type="text"
          value={registration}
          onChange={onChangeRegistration}
        />
        <DarkInput
          className={scss.password}
          placeholder="Пароль..."
          value={password}
          type="password"
          onChange={onChangePassword}
        />
        <div className={scss.controls}>
          <TransparentButton
            className={scss.RegistrationBtn}
            title="Войти"
            onClick={handleClickRegistration}
          />
          <div className={scss.createAccount}>
            Нет аккаунта?
            <Link to={REGISTRATION_PAGE_ROUTE} className={scss.createLink}>
              Создать.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
