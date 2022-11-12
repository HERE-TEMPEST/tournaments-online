import { Route, Routes } from 'react-router-dom'

import { MainLayout, IsNotAuthRoute, PrivateRoute } from '../hoc'
import { HomePage } from './Home'
import { LoginPage } from './Login'
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTRATION_PAGE_ROUTE,
  ROOT,
} from '../constants'
import { RegistrationPage } from './Registration'

import scss from './index.module.scss'

export const TournamentsOnlineApp = () => {
  return (
    <div className={scss.app}>
      <MainLayout>
        <Routes>
          <Route path={ROOT} element={<PrivateRoute />}>
            <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
            <Route path="game" element={<div>Game</div>} />
            <Route path="tournament/:id" element={<div>Game</div>} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="table-records" element={<div>Table Records</div>} />
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
