import React from 'react'
import { useEvents } from '../../../redux'
import { TournamentEventItem } from './Event'

import scss from './TournamentEvents.modules.scss'

export const TournamentsEvents = () => {
  const events = useEvents('tournament')
  return (
    <div className={scss.wrapper}>
      {events.map((event) => (
        <TournamentEventItem key={event.id} event={event} />
      ))}
    </div>
  )
}
