import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { DarkTextInput, TransparentButton } from '../../components'
import { REGISTRATION_PAGE_ROUTE } from '../../constants'
import { createAsyncAuthLoginUserAction, useAppDispatch } from '../../redux'

import scss from './Login.module.scss'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  })

  const handleClickLogin = () => {
    dispatch(createAsyncAuthLoginUserAction({ ...credentials }))
  }

  const onFormChange = (event: any) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleClickLogin()
  }

  return (
    <div className={scss.wrapper}>
      <form
        className={scss.content}
        onSubmit={onFormSubmit}
        onChange={onFormChange}
      >
        <DarkTextInput
          className={scss.login}
          placeholder="Логин..."
          value={credentials.login}
          name="login"
        />
        <DarkTextInput
          className={scss.password}
          placeholder="Пароль..."
          value={credentials.password}
          isPassword={true}
          name="password"
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
      </form>
    </div>
  )
}
