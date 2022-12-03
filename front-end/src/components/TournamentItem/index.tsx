/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import { ITournament } from '../../models'
import scss from './TournamentItem.module.scss'

interface TournamentItemProps extends ITournament {
  onClick: (id: number) => void
  className?: string
}

export const TournamentItem = ({
  onClick,
  id,
  name,
  currentAmount,
  capacity,
  className,
  profile,
}: TournamentItemProps) => {
  return (
    <div
      className={classNames(className || '', scss.wrapper)}
      onClick={() => onClick(id)}
    >
      <img src={profile?.uri || location.origin + '/1.jpg'} alt="" />
      <div className={scss.info}>
        <div className={scss.title}>{name}</div>
        <div className={scss.capacity}>
          {currentAmount}/{capacity}
        </div>
      </div>
    </div>
  )
}
