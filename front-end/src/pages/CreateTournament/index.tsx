import React, { useState } from 'react'
import {
  DarkFileInput,
  DarkNumberInput,
  DarkTextAreaInput,
  DarkTextInput,
} from '../../components'
import { TransparentButton } from '../../components/Buttons'
import scss from './CreateTournament.module.scss'

export const CreateTournamentPage = () => {
  const [tournament, setTournament] = useState({
    fileUri: location.origin + '/default-profile.png',
    file: '',
    title: '',
    capacity: '',
    duration: '',
    description: '',
    region: 'eu-east',
  })

  const onFormChange = (event: any) => {
    if (event.target.name === 'fileUri') {
      const file = event.target.files[0]
      const uri = URL.createObjectURL(file)

      setTournament((prev) => ({
        ...prev,
        fileUri: uri,
        file,
      }))
    } else {
      setTournament((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const createTournament = () => {
    console.log('create tournament')
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createTournament()
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <form
          className={scss.tournamentForm}
          onChange={onFormChange}
          onSubmit={onFormSubmit}
        >
          <div className={scss.profile}>
            <div className={scss.fileUri}>
              <img src={tournament.fileUri} alt="" />
            </div>
            <div className={scss.setFileUri}>
              <div className={scss.title}>Tournament profile</div>
              <DarkFileInput className={scss.btn} name={'fileUri'} />
            </div>
          </div>
          <DarkTextInput
            className={scss.title}
            placeholder="Title..."
            value={tournament.title}
            name={'title'}
          />
          <DarkNumberInput
            className={scss.capacity}
            placeholder="Capacity..."
            value={tournament.capacity}
            name={'capacity'}
          />
          <DarkNumberInput
            className={scss.duration}
            placeholder="Duration in seconds..."
            value={tournament.duration}
            name={'duration'}
          />
          <DarkTextAreaInput
            inputClassName={scss.text}
            className={scss.description}
            placeholder="Description..."
            cols={3}
            value={tournament.description}
            name={'description'}
          />
          <div className={scss.region}>Region: {tournament.region}</div>
        </form>
        <TransparentButton
          className={scss.createTournamentBtn}
          title="Create tournament"
          onClick={createTournament}
        />
      </div>
    </div>
  )
}
