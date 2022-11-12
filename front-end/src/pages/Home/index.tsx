import { useState } from 'react'
import scss from './Home.module.scss'

import { Chat } from './Chat'
import { SearchInput } from './SearchInput'
import { TournamentsSlider } from './TournamentsSlider'

export const HomePage = () => {
  const [searchParam, setSearchParam] = useState('')

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.searchPanel}>
          <SearchInput value={searchParam} setValue={setSearchParam} />
        </div>
        <TournamentsSlider className={scss.tournamentSliderPanel} />
        <div className={scss.chatPanel}>
          <Chat />
        </div>
      </div>
    </div>
  )
}
