import React from 'react'
import {
  createDeleteTournamentWinnerAction,
  useAppDispatch,
  useEvents,
} from '../../../redux'
import { TournamentEventItem } from './Event'

import scss from './TournamentEvents.modules.scss'

export const TournamentsEvents = () => {
  const dispatch = useAppDispatch()
  const events = useEvents('tournament')

  const onClose = (id: string) => {
    dispatch(createDeleteTournamentWinnerAction({ id }))
  }

  return (
    <div className={scss.wrapper}>
      {events.map((event) => (
        <TournamentEventItem key={event.id} event={event} onClose={onClose} />
      ))}
    </div>
  )
}
