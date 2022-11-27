import { DarkFileInput, DarkTextInput } from '../../../components'
import { TransparentButton } from '../../../components/Buttons'
import { useLogic } from './logic'
import scss from './Profile.module.scss'

export const Profile = () => {
  const {
    name,
    file,
    surname,
    login,
    password,
    fileUri,
    onChangePassword,
    onChangeName,
    onChangeSurname,
    onChangeFile,
    onChangeLogin,
  } = useLogic()

  const handleClickRegistration = () => {
    console.log(file)
  }
  return (
    <div className={scss.wrapper}>
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
      <TransparentButton
        className={scss.editBtn}
        title="Edit"
        onClick={handleClickRegistration}
      />
    </div>
  )
}
