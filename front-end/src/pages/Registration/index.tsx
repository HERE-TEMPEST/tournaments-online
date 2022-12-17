import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  DarkFileInput,
  DarkTextInput,
  TransparentButton,
} from '../../components'
import { LOGIN_PAGE_ROUTE } from '../../constants'
import { useAppDispatch, createAsyncAuthRegisterUserAction } from '../../redux'
import scss from './Registration.module.scss'

export const RegistrationPage = () => {
  const dispatch = useAppDispatch()

  const [user, setUser] = useState({
    fileUri: location.origin + '/default-profile.png',
    file: null,
    email: '',
    login: '',
    password: '',
    name: '',
    surname: '',
  })

  const handleClickRegistration = () => {
    dispatch(
      createAsyncAuthRegisterUserAction({
        email: user.email,
        file: user.file,
        login: user.login,
        name: user.name,
        password: user.password,
        surname: user.surname,
      })
    )
  }
  const onFormChange = (event: any) => {
    if (event.target.name === 'profile') {
      const file = event.target.files[0]
      const uri = URL.createObjectURL(file)

      setUser((prev) => ({
        ...prev,
        fileUri: uri,
        file,
      }))
    } else {
      setUser((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleClickRegistration()
  }

  return (
    <div className={scss.wrapper}>
      <form
        className={scss.content}
        onSubmit={onFormSubmit}
        onChange={onFormChange}
      >
        <div className={scss.profile}>
          <div className={scss.profileImage}>
            <img src={user.fileUri} alt="" />
          </div>
          <div className={scss.setProfileInput}>
            <div className={scss.title}>Profile</div>
            <DarkFileInput className={scss.btn} name="profile" />
          </div>
        </div>
        <DarkTextInput
          className={scss.name}
          placeholder="Name..."
          value={user.name}
          name="name"
        />
        <DarkTextInput
          className={scss.surname}
          placeholder="Surname..."
          value={user.surname}
          name="surname"
        />
        <DarkTextInput
          className={scss.surname}
          placeholder="Email..."
          value={user.email}
          name="email"
        />
        <DarkTextInput
          className={scss.login}
          placeholder="Login..."
          value={user.login}
          name="login"
        />
        <DarkTextInput
          className={scss.password}
          placeholder="Password..."
          isPassword={true}
          value={user.password}
          name="password"
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
      </form>
    </div>
  )
}
