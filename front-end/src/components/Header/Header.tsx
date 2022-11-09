import { Link } from 'react-router-dom'

import { MAIN_PAGE_ROUTE } from '../../constants'
import { Icon } from '../Icon'

import scss from './Header.module.scss'

export const Header = () => {
  return (
    <header className={scss.wrapper}>
      <div className={scss.mainLayout}>
        <div className={scss.logo}>
          <Link to={MAIN_PAGE_ROUTE}>
            <Icon type="Logo" />
          </Link>
        </div>
        <div className={scss.navigations}>
          <div className={scss.icon}>
            <Icon type="Plus" />
          </div>
          <div className={scss.icon}>
            <Icon type="TableRecords" />
          </div>
          <div className={scss.icon}>
            <Icon type="Profile" />
          </div>
          <div className={scss.icon}>
            <Icon type="Exit" />
          </div>
        </div>
      </div>
    </header>
  )
}
