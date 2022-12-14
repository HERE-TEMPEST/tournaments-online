/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { toString } from '../../../hooks'
import { ITournament } from '../../../models'
import { useAppSelector } from '../../../redux'

import scss from './SelectedTournament.module.scss'

interface tournamentProps {
  tournament: ITournament
  onClick: () => void
}

const defaultPostUri = location.href + '/1.jpg'

export const SelectedTournament: React.FC<tournamentProps> = ({
  tournament,
  onClick,
}: tournamentProps) => {
  const user = useAppSelector((state) => state.user.user)

  const sortedWinner = tournament.members.sort((a, b) => b.score - a.score)
  const grand = sortedWinner.findIndex((m) => m.memberId === user?._id)

  return (
    <div className={scss.wrapper} onClick={onClick}>
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
          <div className={scss.winner}>
            <div>
              <div className={scss.property}>
                Duration: {toString(tournament.duration)}
              </div>
              <div className={scss.property}>
                Joined: {`${tournament.currentAmount}/${tournament.capacity}`}
              </div>
            </div>
            <div className={scss.winnerText}>Took {grand + 1}st place</div>
          </div>
        </div>
      </div>
    </div>
  )
}
