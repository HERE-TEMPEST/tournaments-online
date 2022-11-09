import { useState } from 'react'
import scss from './Home.module.scss'
import { SearchInput } from './SearchInput'

export const HomePage = () => {
  const [searchParam, setSearchParam] = useState('')

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.searchPanel}>
          <SearchInput value={searchParam} setValue={setSearchParam} />
        </div>
        <div className={scss.tournamentSliderPanel}></div>
        <div className={scss.chatPanel}></div>
      </div>
    </div>
  )
}
