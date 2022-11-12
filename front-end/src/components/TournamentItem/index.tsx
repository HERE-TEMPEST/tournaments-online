/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import scss from './TournamentItem.module.scss'

interface TournamentItemProps {
  onClick: (id: number) => void
  id: number
  title: string
  currentAmount: number
  capacity: number
  postUri: string
}

export const TournamentItem = ({
  onClick,
  id,
  title,
  currentAmount,
  capacity,
  postUri,
}: TournamentItemProps) => {
  return (
    <div className={scss.wrapper} onClick={() => onClick(id)}>
      <img src={postUri} alt="" />
      <div className={scss.info}>
        <div className={scss.title}>{title}</div>
        <div className={scss.capacity}>
          {currentAmount}/{capacity}
        </div>
      </div>
    </div>
  )
}
