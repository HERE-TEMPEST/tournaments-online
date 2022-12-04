import { useEffect, useState } from 'react'
import {
  DarkFileInput,
  DarkTextInput,
  TransparentButton,
} from '../../../components'
import {
  updateUserInfoFetch,
  useAppDispatch,
  useAppSelector,
} from '../../../redux'

import scss from './Profile.module.scss'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const loadedUser = useAppSelector((state) => state.user.user)

  const [user, setUser] = useState({
    fileUri: location.origin + '/default-profile.png',
    file: null,
    email: '',
    login: '',
    password: '',
    name: '',
    surname: '',
  })

  useEffect(() => {
    if (loadedUser) {
      setUser({
        fileUri:
          loadedUser?.profile?.uri || location.origin + '/default-profile.png',
        email: loadedUser?.email || '',
        login: loadedUser?.login || '',
        password: loadedUser?.password || '',
        name: loadedUser?.name || '',
        surname: loadedUser?.surname || '',
        file: null,
      })
    }
  }, [loadedUser])

  const updateUser = () => {
    dispatch(
      updateUserInfoFetch({
        profile: user.file,
        properties: {
          email: user.email,
          name: user.name,
          password: user.password,
          surname: user.surname,
        },
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
    updateUser()
  }

  return (
    <form
      className={scss.wrapper}
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      <div className={scss.profile}>
        <div className={scss.profileImage}>
          <img
            src={user.fileUri || location.origin + '/default-profile.png'}
            alt=""
          />
        </div>
        <div className={scss.setProfileInput}>
          <div className={scss.title}>Profile</div>
          <DarkFileInput className={scss.btn} name={'profile'} />
        </div>
      </div>
      <DarkTextInput
        className={scss.name}
        placeholder="Name..."
        name="name"
        value={user.name}
      />
      <DarkTextInput
        className={scss.surname}
        placeholder="Surname..."
        name="surname"
        value={user.surname}
      />
      <DarkTextInput
        disabled
        className={scss.login}
        placeholder="Login..."
        name="login"
        value={user.login}
      />
      <DarkTextInput
        className={scss.password}
        placeholder="Password..."
        isPassword={true}
        name="password"
        value={user.password}
      />
      <TransparentButton
        className={scss.editBtn}
        title="Edit"
        onClick={updateUser}
      />
    </form>
  )
}
