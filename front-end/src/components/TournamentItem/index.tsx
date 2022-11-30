/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import { Region } from '../../types'
import scss from './TournamentItem.module.scss'

interface TournamentItemProps {
  onClick: (id: number) => void
  id: number
  className?: string
  postUri: string
  name: string
  currentAmount: number
  capacity: number
  region: Region
  duration: number
  isStarted: boolean
}

export const TournamentItem = ({
  onClick,
  id,
  name,
  currentAmount,
  capacity,
  className,
  postUri,
}: TournamentItemProps) => {
  return (
    <div
      className={classNames(className || '', scss.wrapper)}
      onClick={() => onClick(id)}
    >
      <img src={postUri} alt="" />
      <div className={scss.info}>
        <div className={scss.title}>{name}</div>
        <div className={scss.capacity}>
          {currentAmount}/{capacity}
        </div>
      </div>
    </div>
  )
}
