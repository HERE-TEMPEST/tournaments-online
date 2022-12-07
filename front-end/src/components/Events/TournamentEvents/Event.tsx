import React from 'react'
import { ITournamentEvent } from '../../../models'

import scss from './TournamentEvents.modules.scss'

interface TournamentEventProps {
  event: ITournamentEvent
}

export const TournamentEventItem: React.FC<TournamentEventProps> = ({
  event,
}: TournamentEventProps) => {
  return (
    <div className={scss.eventItemWrapper}>
      <div className={scss.profile}>
        <div className={scss.profileImage}>
          <img
            src={event.profileUri || location.origin + '/default-profile.png'}
            alt=""
          />
        </div>
        <div className={scss.messageBody}>
          <div className={scss.title}>{event.title}</div>
          <div className={scss.message}>{event.message}</div>
        </div>
      </div>
    </div>
  )
}
