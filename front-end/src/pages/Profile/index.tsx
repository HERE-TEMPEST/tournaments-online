import React from 'react'
import { Profile } from './Profile'
import { Tournaments } from './Tournaments'

import scss from './ProfilePage.module.scss'

export const ProfilePage = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.profile}>
          <Profile />
        </div>
        <div className={scss.tournaments}>
          <div className={scss.title}>
            <div className={scss.text}>Победные турниры</div>
          </div>
          <div className={scss.content}>
            <Tournaments />
          </div>
        </div>
      </div>
    </div>
  )
}
