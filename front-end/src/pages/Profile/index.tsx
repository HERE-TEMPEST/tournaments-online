import React, { useEffect } from 'react'
import { Profile } from './Profile'
import { WinninedTournaments } from './Tournaments'

import scss from './ProfilePage.module.scss'
import { fetchUserInfo, useAppDispatch, useAppSelector } from '../../redux'
import { Loader } from '../../components'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const isLoadedUser = useAppSelector((state) => state.user.loading)
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserInfo())
    }
  }, [])

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.profile}>
          {!isLoadedUser ? <Profile /> : <Loader />}
        </div>
        <div className={scss.tournaments}>
          <div className={scss.title}>
            <div className={scss.text}>Tournaments you have played</div>
          </div>
          <div className={scss.content}>
            <WinninedTournaments />
          </div>
        </div>
      </div>
    </div>
  )
}
