/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import { ITournament } from '../../models'
import scss from './TournamentItem.module.scss'

interface TournamentItemProps {
  onClick: (id: number) => void
  className?: string
  tournament: ITournament
}

export const TournamentItem = ({
  onClick,
  className,
  tournament,
}: TournamentItemProps) => {
  console.log({ tournament })

  return (
    <div
      className={classNames(className || '', scss.wrapper)}
      onClick={() => onClick(tournament.id)}
    >
      <img src={tournament.profile?.uri || location.origin + '/1.jpg'} alt="" />
      <div className={scss.info}>
        <div className={scss.title}>{tournament.name}</div>
        <div className={scss.capacity}>
          {tournament.currentAmount}/{tournament.capacity}
        </div>
      </div>
    </div>
  )
}
