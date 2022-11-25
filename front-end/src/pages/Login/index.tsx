import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkTextInput } from '../../components'
import { TransparentButton } from '../../components/Buttons'
import { REGISTRATION_PAGE_ROUTE } from '../../constants'

import scss from './Login.module.scss'

export const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onChangePassword = (e: any) => {
    setPassword(() => e.target.value)
  }
  const onChangeLogin = (e: any) => {
    setLogin(() => e.target.value)
  }

  const handleClickLogin = () => {
    return
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <DarkTextInput
          className={scss.login}
          placeholder="Логин..."
          value={login}
          onChange={onChangeLogin}
        />
        <DarkTextInput
          className={scss.password}
          placeholder="Пароль..."
          value={password}
          isPassword={true}
          onChange={onChangePassword}
        />
        <div className={scss.controls}>
          <TransparentButton
            className={scss.loginBtn}
            title="Войти"
            onClick={handleClickLogin}
          />
          <div className={scss.createAccount}>
            Нет аккаунта?
            <Link
              replace={true}
              to={REGISTRATION_PAGE_ROUTE}
              className={scss.createLink}
            >
              Создать.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
