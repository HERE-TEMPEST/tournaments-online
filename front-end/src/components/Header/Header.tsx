/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import {
  CREATE_TOURNAMENT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  TABLE_RECORDS_PAGE_ROUTE,
} from '../../constants'
import { createSignOutUserAction } from '../../redux'
import { Icon } from '../Icon'

import scss from './Header.module.scss'

interface HeaderProps {
  isAuth: boolean
}

const regions = ['eu-east', 'eu-central', 'ca-central', 'us-west', 'us-west']

export const Header = ({ isAuth }: HeaderProps) => {
  const [iconsVisibility, setIconsVisibility] = useState(isAuth)
  const [isOpenedregionSelector, openCloseRegionSelector] = useState(false)
  const [region, setRegion] = useState('eu-east')

  const dispatch = useDispatch()
  const location = useLocation()

  const handleClickSignOut = () => {
    dispatch(createSignOutUserAction())
  }

  useEffect(() => {
    setIconsVisibility(() => isAuth && location.pathname !== '/game')
  }, [location, isAuth])

  return (
    <header className={scss.wrapper}>
      {isOpenedregionSelector && (
        <div className={scss.regionSelection}>
          {regions.map((reg, index) => (
            <div
              key={index}
              className={scss.region}
              onClick={() => (setRegion(reg), openCloseRegionSelector(false))}
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
