import { useState } from 'react'
import scss from './Home.module.scss'

import { Chat } from './Chat'
import { SearchInput } from './SearchInput'
import { TournamentsSlider } from './TournamentsSlider'
import { SelectedTournament } from './SelectedTournament'

export const HomePage = () => {
  const [selectedTournament, setSelected] = useState(false)

  return (
    <div className={scss.wrapper}>
      {selectedTournament && <SelectedTournament setSelected={setSelected} />}
      <div className={scss.content}>
        <div className={scss.searchPanel}>
          <SearchInput />
        </div>
        <TournamentsSlider setSelected={setSelected} />
        <div className={scss.chatPanel}>
          <Chat />
        </div>
      </div>
    </div>
  )
}
