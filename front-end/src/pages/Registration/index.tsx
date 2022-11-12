import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkInput } from '../../components'
import { TransparentButton } from '../../components/Buttons'
import { LOGIN_PAGE_ROUTE } from '../../constants'

import scss from './Registration.module.scss'

export const RegistrationPage = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [surname, setSurname] = useState('')
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')

  const onChangePassword = (e: any) => {
    setPassword(() => e.target.value)
  }
  const onChangeName = (e: any) => {
    setName(() => e.target.value)
  }
  const onChangeSurname = (e: any) => {
    setSurname(() => e.target.value)
  }
  const onChangeFile = (e: any) => {
    setFile(() => e.target.value)
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
        <div className={scss.profile}>
          <div className={scss.profileImage}>
            <img src={location.origin + '/1.jpg'} alt="" />
          </div>
          <div className={scss.setProfileInput}>
            <div className={scss.title}>Фото профиля</div>
            <DarkInput
              className={scss.btn}
              type="file"
              value={file}
              onChange={onChangeFile}
            />
          </div>
        </div>
        <DarkInput
          className={scss.name}
          placeholder="Имя..."
          value={name}
          type="text"
          onChange={onChangeName}
        />
        <DarkInput
          className={scss.surname}
          placeholder="Фамилия..."
          value={surname}
          type="text"
          onChange={onChangeSurname}
        />
        <DarkInput
          className={scss.login}
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
            className={scss.registrationBtn}
            title="Регистрация"
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
