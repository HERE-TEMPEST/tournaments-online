import { useEffect, useState } from 'react'

export const useLogic = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState<any>('')
  const [surname, setSurname] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [fileUri, setFileRef] = useState(
    location.origin + '/default-profile.png'
  )

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
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  useEffect(() => {
    if (file) {
      const uri = URL.createObjectURL(file)

      setFileRef(uri)
    }
  }, [file])

  const onChangeLogin = (e: any) => {
    setLogin(() => e.target.value)
  }

  return {
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
  }
}
