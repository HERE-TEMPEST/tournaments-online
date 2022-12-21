/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TransparentButton } from '../../../components/Buttons'
import { createTournamentWaitingPageUri } from '../../../constants'
import { toString } from '../../../hooks'
import { ITournament } from '../../../models'

import scss from './SelectedTournament.module.scss'

interface SelectedTournamentProps {
  onClose: () => void
  tournament: ITournament
}

const defaultPostUri = location.href + '/1.jpg'

export const SelectedTournament: React.FC<SelectedTournamentProps> = ({
  tournament,
  onClose,
}: SelectedTournamentProps) => {
  const navigation = useNavigate()

  return (
    <div className={scss.wrapper} onClick={() => onClose()}>
      <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
        <div className={scss.title}>{tournament.name}</div>
        <div className={scss.info}>
          <div className={scss.profile}>
            <div className={scss.profileImage}>
              <img src={tournament.profile?.uri || defaultPostUri} alt="" />
            </div>
            <div className={scss.description}>
              <div className={scss.tournamentDescription}>Description</div>
              <div className={scss.text}>
                {tournament.description || 'No descriptions...'}
              </div>
            </div>
          </div>
          <div className={scss.property}>
            Duration: {toString(tournament.duration)}
          </div>
          <div className={scss.property}>
            Joined: {`${tournament.currentAmount}/${tournament.capacity}`}
          </div>
          <TransparentButton
            title="Join"
            className={scss.btn}
            onClick={() => {
              navigation(createTournamentWaitingPageUri(tournament.id))
            }}
          />
        </div>
      </div>
    </div>
  )
}
