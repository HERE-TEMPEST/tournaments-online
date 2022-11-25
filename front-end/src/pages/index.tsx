import { Route, Routes } from 'react-router-dom'

import { HomePage } from './Home'
import { LoginPage } from './Login'
import { ProfilePage } from './Profile'
import { RegistrationPage } from './Registration'
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  REGISTRATION_PAGE_ROUTE,
  ROOT,
  TABLE_RECORDS_PAGE_ROUTE,
} from '../constants'
import { MainLayout, IsNotAuthRoute, PrivateRoute } from '../hoc'

import scss from './index.module.scss'
import { TableRecordsPage } from './TableRecords'

export const TournamentsOnlineApp = () => {
  return (
    <div className={scss.app}>
      <MainLayout>
        <Routes>
          <Route path={ROOT} element={<PrivateRoute />}>
            <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
            <Route path="tournament/:id" element={<div>Game</div>} />
            <Route path={PROFILE_PAGE_ROUTE} element={<ProfilePage />} />
            <Route
              path={TABLE_RECORDS_PAGE_ROUTE}
              element={<TableRecordsPage />}
            />
          </Route>
          <Route path={ROOT} element={<IsNotAuthRoute />}>
            <Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
            <Route
              path={REGISTRATION_PAGE_ROUTE}
              element={<RegistrationPage />}
            />
          </Route>
        </Routes>
      </MainLayout>
    </div>
  )
}
