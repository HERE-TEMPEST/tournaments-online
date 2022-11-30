import React from 'react'
import { Link } from 'react-router-dom'
import { DarkFileInput, DarkTextInput } from '../../components'
import { TransparentButton } from '../../components/Buttons'
import { LOGIN_PAGE_ROUTE } from '../../constants'
import { fetchRegisterUser, useAppDispatch } from '../../redux'
import { useLogic } from './logic'

import scss from './Registration.module.scss'

export const RegistrationPage = () => {
  const dispatch = useAppDispatch()

  const {
    name,
    file,
    surname,
    login,
    password,
    fileUri,
    email,
    onChangeEmail,
    onChangePassword,
    onChangeName,
    onChangeSurname,
    onChangeFile,
    onChangeLogin,
  } = useLogic()

  const handleClickRegistration = () => {
    dispatch(fetchRegisterUser({ email, file, login, name, password, surname }))
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.profile}>
          <div className={scss.profileImage}>
            <img src={fileUri} alt="" />
          </div>
          <div className={scss.setProfileInput}>
            <div className={scss.title}>Profile</div>
            <DarkFileInput className={scss.btn} onChange={onChangeFile} />
          </div>
        </div>
        <DarkTextInput
          className={scss.name}
          placeholder="Name..."
          value={name}
          onChange={onChangeName}
        />
        <DarkTextInput
          className={scss.surname}
          placeholder="Surname..."
          value={surname}
          onChange={onChangeSurname}
        />
        <DarkTextInput
          className={scss.surname}
          placeholder="Email..."
          value={email}
          onChange={onChangeEmail}
        />
        <DarkTextInput
          className={scss.login}
          placeholder="Login..."
          value={login}
          onChange={onChangeLogin}
        />
        <DarkTextInput
          className={scss.password}
          placeholder="Password..."
          isPassword={true}
          value={password}
          onChange={onChangePassword}
        />
        <div className={scss.controls}>
          <TransparentButton
            className={scss.registrationBtn}
            title="Registration"
            onClick={handleClickRegistration}
          />
          <div className={scss.createAccount}>
            Есть аккаунт?
            <Link
              to={LOGIN_PAGE_ROUTE}
              className={scss.createLink}
              replace={true}
            >
              Войти.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
