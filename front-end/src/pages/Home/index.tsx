import { useContext, useEffect, useState } from 'react'
import scss from './Home.module.scss'

import { Portal } from '../../components'
import { ITournament } from '../../models'

import { SearchInput } from './SearchInput'
import { TournamentsSlider } from './TournamentsSlider'
import { SelectedTournament } from './SelectedTournament'
import { Chat } from './Chat'
import { GlobalSocketContext } from '../../contexts'
import { useHome, useUser } from '../../hooks'

export const HomePage = () => {
  const { chatMessages } = useHome()
  const { user, fetchUser } = useUser()

  const globalSocketContext = useContext(GlobalSocketContext)
  const [selectedTournament, setSelectedTournament] = useState<
    ITournament | undefined
  >(undefined)

  useEffect(() => {
    if (!user) {
      fetchUser()
    }
  }, [])

  const onCloseTournamentModal = () => {
    setSelectedTournament(undefined)
  }

  return (
    <div className={scss.wrapper}>
      {selectedTournament && (
        <Portal>
          <SelectedTournament
            tournament={selectedTournament}
            onClose={onCloseTournamentModal}
          />
        </Portal>
      )}
      <div className={scss.content}>
        <div className={scss.searchPanel}>
          <SearchInput />
        </div>
        <TournamentsSlider setSelectedTournament={setSelectedTournament} />
        <div className={scss.chatPanel}>
          <Chat
            me={user}
            messages={chatMessages}
            onMessage={
              globalSocketContext?.sendMessage ||
              (() => {
                console.log('error in sending message')
              })
            }
          />
        </div>
      </div>
    </div>
  )
}
