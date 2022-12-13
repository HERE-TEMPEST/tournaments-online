/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { ITournamentEvent } from '../../../models'
import { Icon } from '../../Icon'

import scss from './TournamentEvents.modules.scss'

interface TournamentEventProps {
  event: ITournamentEvent
  onClose: (id: string) => void
}

export const TournamentEventItem: React.FC<TournamentEventProps> = ({
  event,
  onClose,
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
        <div className={scss.icon} onClick={() => onClose(event.id)}>
          <Icon type="Close" />
        </div>
      </div>
    </div>
  )
}
