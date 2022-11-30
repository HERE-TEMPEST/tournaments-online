import { DarkFileInput, DarkTextInput } from '../../../components'
import { TransparentButton } from '../../../components/Buttons'
import { useAppSelector } from '../../../redux'
import { useLogic } from './logic'
import scss from './Profile.module.scss'

export const Profile = () => {
  const {
    // name,
    file,
    // surname,
    // login,
    // password,
    // fileUri,
    onChangePassword,
    onChangeName,
    onChangeSurname,
    onChangeFile,
    onChangeLogin,
  } = useLogic()

  const handleClickEditAccount = () => {
    console.log(file)
  }

  const user = useAppSelector((state) => state.user.user)

  if (user) {
    return (
      <div className={scss.wrapper}>
        <div className={scss.profile}>
          <div className={scss.profileImage}>
            <img
              src={
                user.profile?.uri || location.origin + '/default-profile.png'
              }
              alt=""
            />
          </div>
          <div className={scss.setProfileInput}>
            <div className={scss.title}>Profile</div>
            <DarkFileInput className={scss.btn} onChange={onChangeFile} />
          </div>
        </div>
        <DarkTextInput
          className={scss.name}
          placeholder="Name..."
          value={user.name}
          onChange={onChangeName}
        />
        <DarkTextInput
          className={scss.surname}
          placeholder="Surname..."
          value={user.surname}
          onChange={onChangeSurname}
        />
        <DarkTextInput
          className={scss.login}
          placeholder="Login..."
          value={user.login}
          onChange={onChangeLogin}
        />
        <DarkTextInput
          className={scss.password}
          placeholder="Password..."
          isPassword={true}
          value={user.password}
          onChange={onChangePassword}
        />
        <TransparentButton
          className={scss.editBtn}
          title="Edit"
          onClick={handleClickEditAccount}
        />
      </div>
    )
  } else {
    return <div>Идёт загрузка...</div>
  }
}
