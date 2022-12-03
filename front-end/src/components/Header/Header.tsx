/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  CREATE_TOURNAMENT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  TABLE_RECORDS_PAGE_ROUTE,
} from '../../constants'
import {
  createSignOutUserAction,
  useAppDispatch,
  useAppSelector,
  createChangeRegionAction,
  connectToChatAction,
  createDisconnectChatSocketAction,
} from '../../redux'
import { Region } from '../../types'
import { Icon } from '../Icon'

import scss from './Header.module.scss'

const regions: Array<Region> = [
  'eu-east',
  'eu-central',
  'ca-central',
  'us-west',
  'global',
]

export const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.auth.isAuth)
  const [iconsVisibility, setIconsVisibility] = useState(isAuth)
  const [isOpenedregionSelector, openCloseRegionSelector] = useState(false)
  const dispath = useAppDispatch()

  const region = useAppSelector((state) => state.tournaments.region)
  const onChangeRegion = (reg: Region) => {
    openCloseRegionSelector(false)
    dispath(createChangeRegionAction(reg))
    dispatch(connectToChatAction())
  }

  const dispatch = useAppDispatch()
  const location = useLocation()

  const handleClickSignOut = () => {
    dispatch(createSignOutUserAction())
    dispatch(createDisconnectChatSocketAction(undefined))
  }

  useEffect(() => {
    setIconsVisibility(() => isAuth && location.pathname !== '/game')
  }, [location, isAuth])

  return (
    <header className={scss.wrapper}>
      {isOpenedregionSelector && (
        <div className={scss.regionSelection}>
          {regions.map((reg: Region, index) => (
            <div
              key={index}
              className={scss.region}
              onClick={() => onChangeRegion(reg)}
            >
              {reg}
            </div>
          ))}
        </div>
      )}
      <div className={scss.mainLayout}>
        <div className={scss.logo}>
          <Link to={HOME_PAGE_ROUTE}>
            <Icon type="Logo" />
          </Link>
        </div>
        {iconsVisibility && (
          <div className={scss.navigations}>
            <div className={scss.iconBottomArrow}>
              <div className={scss.region}>{region}</div>
              <div onClick={() => openCloseRegionSelector((prev) => !prev)}>
                <Icon type="BottomArrow" />
              </div>
            </div>
            <div className={scss.icon}>
              <Link to={CREATE_TOURNAMENT_PAGE_ROUTE} replace={true}>
                <Icon type="Plus" />
              </Link>
            </div>
            <div className={scss.icon}>
              <Link to={TABLE_RECORDS_PAGE_ROUTE} replace={true}>
                <Icon type="TableRecords" />
              </Link>
            </div>
            <div className={scss.icon}>
              <Link to={PROFILE_PAGE_ROUTE} replace={true}>
                <Icon type="Profile" />
              </Link>
            </div>
            <div className={scss.icon} onClick={handleClickSignOut}>
              <Icon type="Exit" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
