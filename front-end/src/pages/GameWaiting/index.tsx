import React from 'react'
import { TransparentButton } from '../../components/Buttons'

import { toString } from '../../hooks'
import { Chat } from './Chat'

import scss from './GameWaiting.module.scss'

export const GameWaitingPage = () => {
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

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.tournamentInfoPanel}>
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
          </div>
          <div className={scss.exit}>
            <div className={scss.duration}>
              Duration: {toString(tournament.duration)}
            </div>

            <div
              className={scss.capacity}
            >{`${tournament.currentAmount}/${tournament.capacity}`}</div>

            <TransparentButton
              title="Exit"
              className={scss.btn}
              onClick={() => {
                return
              }}
            />
          </div>
        </div>
        <div className={scss.chatPanel}>
          <Chat />
        </div>
      </div>
    </div>
  )
}
