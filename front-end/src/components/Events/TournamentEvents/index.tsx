import React from 'react'
import { useEvents } from '../../../hooks'
import { TournamentEventItem } from './Event'

import scss from './TournamentEvents.modules.scss'

export const TournamentsEvents = () => {
  const { events } = useEvents()

  const onClose = (id: string) => {}

  return (
    <div className={scss.wrapper}>
      {events.map((event) => (
        <TournamentEventItem key={event.id} event={event} onClose={onClose} />
      ))}
    </div>
  )
}
