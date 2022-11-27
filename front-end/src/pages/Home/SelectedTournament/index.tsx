/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TransparentButton } from '../../../components/Buttons'
import { createTournamentWaitingPageUri } from '../../../constants'
import { toString } from '../../../hooks'

import scss from './SelectedTournament.module.scss'

export const SelectedTournament: React.FC = ({ setSelected }: any) => {
  const tournament = {
    id: 1,
    title: 'Some name',
    currentAmount: 3,
    capacity: 10,
    duration: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemocumque quae atque velit dolores neque iure, sapiente modi ipsasunt sed rem molestiae, quaerat vitae a et dolorem incidunt sintratione doloremque. Lorem ipsum dolor sit amet consecteturadipisicing elit. Nemo cumque quae atque velit dolores nequeiure, sapiente modi ipsa sunt sed rem molestiae, quaerat vitae aet dolorem incidunt sint ratione doloremque.Lorem ipsum dolorsit amet consectetur adipisicing elit. Nemo cumque quae atquevelit dolores neque iure, sapiente modi ipsa sunt sed remmolestiae, quaerat vitae a et dolorem incidunt sint rationedoloremque. Lorem ipsum dolor sit amet consectetur adipisicingelit. Nemo cumque quae atque velit dolores neque iure, sapientemodi ipsa sunt sed rem molestiae',
    postUri: location.origin + '/1.jpg',
  }
  const navigation = useNavigate()

  return (
    <div className={scss.wrapper} onClick={() => setSelected(false)}>
      <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
        <div className={scss.title}>{tournament.title}</div>
        <div className={scss.info}>
          <div className={scss.profile}>
            <div className={scss.profileImage}>
              <img src={tournament.postUri} alt="" />
            </div>
            <div className={scss.description}>
              <div className={scss.tournamentDescription}>Description</div>
              <div className={scss.text}>{tournament.description}</div>
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
