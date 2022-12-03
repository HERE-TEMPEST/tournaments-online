import { useState } from 'react'
import scss from './Home.module.scss'

import { Chat } from './Chat'
import { SearchInput } from './SearchInput'
import { TournamentsSlider } from './TournamentsSlider'
import { SelectedTournament } from './SelectedTournament'
import { ITournament } from '../../models'

export const HomePage = () => {
  const [isopen, isOpen] = useState(false)
  const [selectedTournament, setSelectedTournament] = useState<
    ITournament | undefined
  >(undefined)

  return (
    <div className={scss.wrapper}>
      {isopen && selectedTournament && (
        <SelectedTournament tournament={selectedTournament} isOpen={isOpen} />
      )}
      <div className={scss.content}>
        <div className={scss.searchPanel}>
          <SearchInput />
        </div>
        <TournamentsSlider
          setSelectedTournament={setSelectedTournament}
          isOpen={isOpen}
        />
        <div className={scss.chatPanel}>
          <Chat />
        </div>
      </div>
    </div>
  )
}
