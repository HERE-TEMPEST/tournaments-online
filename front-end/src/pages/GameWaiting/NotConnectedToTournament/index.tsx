/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon, TransparentButton } from '../../../components'
import { HOME_PAGE_ROUTE } from '../../../constants'
import { useAppSelector } from '../../../redux'

import scss from './NotConnectedToTournament.module.scss'

export const NotConnectedToTournament = () => {
  const navigation = useNavigate()
  const tournament = useAppSelector((state) => state.game.tournament)

  return (
    <div className={scss.wrapper}>
      <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
        <div className={scss.title}>
          {tournament?.name || 'Tournament name'}
        </div>
        <div className={scss.info}>
          <div className={scss.text}>Failed to connect...</div>
          <div className={scss.icon}>
            <Icon type="NotConnected" />
          </div>
          <div className={scss.description}>
            The connection time has expired or the required number of people
            have already joined the tournament...
          </div>
          <TransparentButton
            title="Go home"
            className={scss.btn}
            onClick={() => {
              navigation(HOME_PAGE_ROUTE, { replace: true })
            }}
          />
        </div>
      </div>
    </div>
  )
}
